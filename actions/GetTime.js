const axios = require(`axios`);
const moment = require(`moment`);

const { googleApiKey } = require(`../config`);

const GOOGLE_GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json`;
const GOOGLE_TIMEZONE_URL = `https://maps.googleapis.com/maps/api/timezone/json`;

class GetTime {
  static async run(location) {
    let { lat, lng } = {};

    try {
      const {
        data: {
          results: [{
            geometry: {
              location: geoLocation,
            } = {},
          }] = [],
        },
      } = await axios.get(GOOGLE_GEOCODE_URL, {
        params: {
          key: googleApiKey,
          address: location,
        },
      });

      ({ lat, lng } = geoLocation);
    } catch (error) {
      console.log(error.response);
    }

    let { dstOffset, rawOffset } = {};

    try {
      (
        {
          data: {
            dstOffset, rawOffset,
          },
        } = await axios.get(GOOGLE_TIMEZONE_URL, {
          params: {
            key: googleApiKey,
            location: `${lat},${lng}`,
            timestamp: moment().format(`X`),
          },
        })
      );
    } catch (error) {
      console.error(error.response);
    }

    const currentTimestamp = moment().format(`X`) * 1;
    const timeInLocal = moment
      .unix(`${currentTimestamp + dstOffset + rawOffset}`)
      .utc()
      .format(`dddd, MMMM Do YYYY, h:mm:ss a`);

    return {
      time: timeInLocal,
    };
  }
}

module.exports = GetTime;
