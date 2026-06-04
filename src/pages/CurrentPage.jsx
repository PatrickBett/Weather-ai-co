import { useWeather } from "../hooks/useWeather";
import CurrentWeatherCard from "../components/weather/CurrentWeatherCard";

export default function CurrentPage({ city }) {
  const { data, isLoading, error } = useWeather(city);

  return (
    <div className="container py-4">
      {isLoading && (
        <div className="card shadow-sm p-3 text-center mt-3">
          <div
            className="spinner-border text-primary mx-auto mb-2"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mb-0">Fetching weather data...</p>
        </div>
      )}
      {error && (
        <div className="alert alert-danger text-center mt-3">
          {error.message}
        </div>
      )}

      <CurrentWeatherCard data={data?.current} city={city} />
    </div>
  );
}
