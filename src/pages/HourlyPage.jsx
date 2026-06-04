import { useWeather } from "../hooks/useWeather";
import HourlyForecast from "../components/weather/HourlyForecast";

export default function HourlyPage({ city }) {
  const { data, isLoading, error } = useWeather(city);

  const hourly = data?.hourly;

  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    padding: "30px 15px",
    color: "white",
  };

  const glassCard = {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "20px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        {/* HEADER */}
        <div style={headerStyle}>
          <h3 className="fw-bold">{city}</h3>
          <p className="text-light">Hourly Forecast</p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="alert alert-danger text-center">{error.message}</div>
        )}

        {/* LOADING */}
        {isLoading && (
          <div className="text-center" style={glassCard}>
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2 mb-0">Loading hourly data...</p>
          </div>
        )}

        {/* CONTENT */}
        {!isLoading && !error && (
          <div style={glassCard}>
            <HourlyForecast data={hourly} />
          </div>
        )}
      </div>
    </div>
  );
}
