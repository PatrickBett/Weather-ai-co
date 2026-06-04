import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_AI_KEY;

// Convert city to coordinates
export const getCoordinates = async (city) => {
  const res = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: city,
        format: "json",
        limit: 1,
      },
    }
  );

  if (!res.data.length) {
    throw new Error("City not found");
  }

  return {
    lat: res.data[0].lat,
    lon: res.data[0].lon,
  };
};

// Get weather
export const getWeatherAI = async ({ lat, lon }) => {
  try {
    const res = await axios.get(
      "/api/v1/weather",
      {
        params: {
          lat,
          lon,
          days: 7,
          ai: true,
          units: "metric",
        },
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    console.log("Weather API Response:", res.data);

    return res.data;
  } catch (error) {
    console.log("Weather API Error:", error);
    throw error;
  }
};
// Get Account Usage
export const getAccountUsage = async () => {
  const res = await axios.get(
    "/api/v1/usage",
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return res.data;
};
