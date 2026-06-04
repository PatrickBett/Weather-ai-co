import { useWeather } from "../hooks/useWeather";
import CurrentWeatherCard from "../components/weather/CurrentWeatherCard";

export default function CurrentPage({ city }) {
  const { data, isLoading, error } = useWeather(city);

  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const glassCard = {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    padding: "25px",
    textAlign: "center",
    width: "100%",
    maxWidth: "500px",
  };

  return (
    <div style={pageStyle}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {/* LOADING */}
        {isLoading && (
          <div className="shadow" style={glassCard}>
            <div className="spinner-border text-light mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h6>Fetching weather data...</h6>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="alert alert-danger text-center">{error.message}</div>
        )}

        {/* CONTENT */}
        {!isLoading && !error && (
          <div style={glassCard} className="shadow-lg">
            <CurrentWeatherCard data={data?.current} city={city} />
          </div>
        )}
      </div>
    </div>
  );
}
