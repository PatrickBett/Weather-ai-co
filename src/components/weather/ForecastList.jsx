export default function ForecastList({ data }) {
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
      <h4 className="fw-bold mb-3 text-center">7-Day Forecast</h4>

      {/* SCROLL ROW */}
      <div className="d-flex gap-3 overflow-auto pb-2">
        {data.map((item, i) => (
          <div key={i} style={cardStyle} className="shadow-sm">
            {/* DATE */}
            <p className="fw-bold mb-2">{new Date(item.date).toDateString()}</p>

            {/* ICON */}
            <img
              src={item.icon}
              alt="weather icon"
              width={60}
              height={60}
              className="mb-2"
            />

            {/* TEMPERATURE */}
            <h5 className="fw-bold mb-1">
              {Math.round(item.temp_max)}° / {Math.round(item.temp_min)}°
            </h5>

            {/* CONDITION */}
            <p className="text-light mb-2" style={{ opacity: 0.8 }}>
              Condition {item.condition_code}
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
                <small>💧 Rainfall</small>
                <div className="fw-semibold">{item.precipitation_sum} mm</div>
              </div>

              <div className="col-6 mb-1">
                <small>💨 Wind</small>
                <div className="fw-semibold">{item.wind_max} m/s</div>
              </div>

              <div className="col-6 mb-1">
                <small>📅 Sunrise</small>
                <div className="fw-semibold">
                  {new Date(item.sunrise).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>

              <div className="col-12 mt-2">
                <small>🌇 Sunset</small>
                <div className="fw-semibold">
                  {new Date(item.sunset).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
