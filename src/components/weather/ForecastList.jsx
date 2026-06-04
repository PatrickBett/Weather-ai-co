export default function ForecastList({ data }) {
  if (!Array.isArray(data)) return null;

  return (
    <div className="mt-4">
      <h3>7-Day Forecast</h3>

      <div className="d-flex gap-3 overflow-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="border rounded p-3 text-center shadow-sm"
            style={{ minWidth: 220 }}
          >
            {/* Date */}
            <p className="fw-bold mb-1">{new Date(item.date).toDateString()}</p>

            {/* Icon */}
            <img src={item.icon} alt="weather icon" width={55} height={55} />

            {/* Temperature */}
            <h5 className="mb-1">
              {Math.round(item.temp_max)}° / {Math.round(item.temp_min)}°
            </h5>

            {/* Condition */}
            <small className="d-block text-muted mb-2">
              Condition code: {item.condition_code}
            </small>

            {/* Precipitation probability */}
            <small className="d-block">
              🌧 Chance of rain: {item.precipitation_probability}%
            </small>

            {/* Precipitation amount */}
            <small className="d-block">
              💧 Rainfall: {item.precipitation_sum} mm
            </small>

            {/* Wind */}
            <small className="d-block">💨 Max wind: {item.wind_max} m/s</small>

            {/* Sunrise / Sunset */}
            <small className="d-block">
              🌅 Sunrise:{" "}
              {new Date(item.sunrise).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>

            <small className="d-block">
              🌇 Sunset:{" "}
              {new Date(item.sunset).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
