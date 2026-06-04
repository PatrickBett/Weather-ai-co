export default function CurrentWeatherCard({ data, city }) {
  if (!data) return null;

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    maxWidth: 380,
    margin: "auto",
    padding: "25px",
    textAlign: "center",
  };

  const iconStyle = {
    width: 100,
    height: 100,
  };

  return (
    <div style={cardStyle} className="shadow-lg">
      {/* CITY */}
      <h4 className="fw-bold mb-1">{city}</h4>

      <p className="text-light mb-3" style={{ opacity: 0.8 }}>
        Current Conditions
      </p>

      {/* ICON */}
      <img src={data.icon} alt="weather icon" style={iconStyle} />

      {/* TEMPERATURE */}
      <h1 className="fw-bold mt-2 mb-1">{Math.round(data.temperature)}°C</h1>

      <p className="mb-3 text-light" style={{ opacity: 0.8 }}>
        Feels like {Math.round(data.feels_like)}°C
      </p>

      {/* WEATHER DETAILS GRID */}
      <div className="row text-center mt-3">
        <div className="col-6 mb-2">
          <small>Condition</small>
          <div className="fw-semibold">{data.condition_code}</div>
        </div>

        <div className="col-6 mb-2">
          <small>Humidity</small>
          <div className="fw-semibold">{data.humidity}%</div>
        </div>

        <div className="col-6 mb-2">
          <small>Wind</small>
          <div className="fw-semibold">{data.wind_speed} m/s</div>
        </div>

        <div className="col-6 mb-2">
          <small>Gust</small>
          <div className="fw-semibold">{data.wind_gust} m/s</div>
        </div>

        <div className="col-6 mb-2">
          <small>Direction</small>
          <div className="fw-semibold">{data.wind_direction}°</div>
        </div>

        <div className="col-6 mb-2">
          <small>UV Index</small>
          <div className="fw-semibold">{data.uv_index}</div>
        </div>
      </div>

      {/* FOOTER TIME */}
      <p className="mt-3 mb-0" style={{ fontSize: 12, opacity: 0.7 }}>
        Last updated: {new Date(data.time).toLocaleString()}
      </p>
    </div>
  );
}
