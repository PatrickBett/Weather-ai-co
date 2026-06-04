import { useWeather } from "../hooks/useWeather";
import HourlyForecast from "../components/weather/HourlyForecast";

export default function HourlyPage({ city }) {
  const { data, isLoading, error } = useWeather(city);

  const hourly = data?.hourly;

  if (error)
    return (
      <div className="alert alert-danger text-center mt-3">{error.message}</div>
    );

  return (
    <div className="container py-4">
      <h4>{city} - Hourly Forecast</h4>

      {isLoading && (
        <div className="text-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <HourlyForecast data={hourly} />
    </div>
  );
}
