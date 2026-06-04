export default function HourlyForecast({ data }) {
  if (!Array.isArray(data)) return null;

  const containerStyle = {
    color: "white",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.2)",
    minWidth: 220,
    padding: "16px",
    textAlign: "center",
  };

  return (
    <div className="mt-4" style={containerStyle}>
      {/* HEADER */}
      <h4 className="fw-bold mb-3 text-center">Hourly Forecast</h4>

      {/* SCROLL ROW */}
      <div className="d-flex gap-3 overflow-auto pb-2">
        {data.slice(0, 24).map((item, i) => (
          <div key={i} style={cardStyle} className="shadow-sm">
            {/* TIME */}
            <p className="fw-bold mb-2">{new Date(item.time).getHours()}:00</p>

            {/* ICON */}
            <img
              src={item.icon}
              alt="weather icon"
              width={55}
              height={55}
              className="mb-2"
            />

            {/* TEMP */}
            <h5 className="fw-bold mb-1">{Math.round(item.temperature)}°C</h5>

            <p className="text-light mb-2" style={{ opacity: 0.8 }}>
              Feels {Math.round(item.feels_like)}°C
            </p>

            {/* GRID DETAILS */}
            <div className="row text-start">
              <div className="col-6 mb-1">
                <small>🌧 Rain</small>
                <div className="fw-semibold">
                  {item.precipitation_probability}%
                </div>
              </div>

              <div className="col-6 mb-1">
                <small>💧 Humidity</small>
                <div className="fw-semibold">{item.humidity}%</div>
              </div>

              <div className="col-6 mb-1">
                <small>💨 Wind</small>
                <div className="fw-semibold">{item.wind_speed}</div>
              </div>

              <div className="col-6 mb-1">
                <small>🌪 Gust</small>
                <div className="fw-semibold">{item.wind_gust}</div>
              </div>

              <div className="col-12 mt-2">
                <small>☀️ UV Index</small>
                <div className="fw-semibold">{item.uv_index}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
