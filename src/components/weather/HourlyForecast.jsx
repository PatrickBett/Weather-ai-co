export default function HourlyForecast({ data }) {
  if (!Array.isArray(data)) return null;

  return (
    <div className="mt-4">
      <h3>Hourly Forecast</h3>

      <div className="d-flex gap-3 overflow-auto">
        {data.slice(0, 24).map((item, i) => (
          <div
            key={i}
            className="border rounded p-3 text-center shadow-sm"
            style={{ minWidth: 220 }}
          >
            {/* Time */}
            <p className="fw-bold mb-1">{new Date(item.time).getHours()}:00</p>

            {/* Icon */}
            <img src={item.icon} alt="weather icon" width={50} height={50} />

            {/* Temperature */}
            <h5 className="mb-1">{Math.round(item.temperature)}°C</h5>

            {/* Feels like */}
            <p className="mb-1 text-muted">
              Feels like {Math.round(item.feels_like)}°C
            </p>

            {/* Condition */}
            <small className="d-block text-muted mb-2">
              Condition code: {item.condition_code}
            </small>

            {/* Precipitation */}
            <small className="d-block">
              🌧 {item.precipitation_probability}% rain
            </small>

            {/* Wind */}
            <small className="d-block">
              💨 {item.wind_speed} m/s (gust {item.wind_gust})
            </small>

            {/* Humidity */}
            <small className="d-block">💧 {item.humidity}% humidity</small>

            {/* UV Index */}
            <small className="d-block">☀️ UV index: {item.uv_index}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
