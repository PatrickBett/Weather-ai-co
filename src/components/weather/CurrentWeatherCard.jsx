export default function CurrentWeatherCard({ data, city }) {
  if (!data) return null;

  return (
    <div
      className="card shadow-sm p-4 text-center"
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        background: "#fff",
        maxWidth: 340,
        margin: "auto",
      }}
    >
      {/* City */}
      <h4 className="fw-bold mb-2">{city}</h4>

      {/* Weather icon */}
      <img
        src={data.icon}
        alt="weather icon"
        style={{ width: 90, height: 90 }}
      />

      {/* Temperature */}
      <h1 className="mb-1">{Math.round(data.temperature)}°C</h1>


      {/* Condition */}
      <p className="mb-1">Condition code: {data.condition_code}</p>

      {/* Wind */}
      <p className="mb-1">💨 Wind: {data.wind_speed} m/s</p>

      {/* Wind direction */}
      <p className="mb-1">🧭 Direction: {data.wind_direction}°</p>

      {/* Time */}
      <p style={{ fontSize: 12, color: "#666" }}>
        Last updated: {new Date(data.time).toLocaleString()}
      </p>
    </div>
  );
}
