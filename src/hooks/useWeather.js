import { useQuery } from "@tanstack/react-query";
import { getCoordinates, getWeatherAI } from "../services/weatherApi";

export const useWeather = (city) => {
  return useQuery({
    queryKey: ["weather", city],

    queryFn: async () => {
      const coords = await getCoordinates(city);
      const data = await getWeatherAI(coords);
      return data;
    },

    enabled: !!city,
    staleTime: 1000 * 60 * 5,
  });
};