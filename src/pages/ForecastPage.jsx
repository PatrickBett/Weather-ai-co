import { useWeather } from "../hooks/useWeather";
import ForecastList from "../components/weather/ForecastList";

export default function ForecastPage({ city }) {
  const { data, isLoading } = useWeather(city);

  return (
    <div className="container py-4">
      <h4>{city} - 7 Day Forecast</h4>

      {isLoading && (
        <div className="text-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <ForecastList data={data?.daily} />
    </div>
  );
}
