import { useWeather } from "../hooks/useWeather";
import ForecastList from "../components/weather/ForecastList";

export default function ForecastPage({ city }) {
  const { data, isLoading, error } = useWeather(city);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        padding: "30px 15px",
        color: "white",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-1">{city}</h2>
          <p
            className="mb-0"
            style={{
              opacity: 0.8,
              fontSize: "1rem",
            }}
          >
            7-Day Weather Forecast
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div
            className="shadow-lg text-center"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "30px",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <div className="spinner-border text-light mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <p className="mb-0">Loading forecast data...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            className="alert alert-danger text-center shadow-sm"
            role="alert"
          >
            {error.message}
          </div>
        )}

        {/* Forecast Content */}
        {!isLoading && !error && (
          <div
            className="shadow-lg"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "20px",
            }}
          >
            <ForecastList data={data?.daily} />
          </div>
        )}
      </div>
    </div>
  );
}
