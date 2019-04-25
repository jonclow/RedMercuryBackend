const debug = require('debug')('WeatherController');

function WeatherController() {
  function newDatapoint(req, res) {
    const db = req.app.get('db');

    db.query('INSERT INTO public.weather ('
      + 'read_time, '
      + 'altitude, '
      + 'pressure, '
      + 'ctemp, '
      + 'ftemp, '
      + 'humidity, '
      + 'light, '
      + 'wind_direction, '
      + 'wind_speed, '
      + 'wind_peak_speed, '
      + 'rainfall'
      + ') VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [
      req.body.readTime,
      req.body.altitude,
      req.body.barometricPressure,
      req.body.celsiusTemperature,
      req.body.farenheitTemperature,
      req.body.humidity,
      req.body.lightSensorVoltage,
      req.body.windDirection,
      req.body.windSpeed,
      req.body.peakWindSpeed,
      req.body.rainfall,
    ], (error, result) => {
      if (error) {
        debug(`WeatherController -> newDatapoint      Error:  ${JSON.stringify(error)}`);
        return res.status(400).send(`Error: ${JSON.stringify(error)}`);
      }
      return res.status(201).send(`Weather data added: ${result}`);
    });
  }

  return { newDatapoint };
}

module.exports = WeatherController;
