import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "10b382175af5cd6ae4cd308aef7763dc";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_Key,
    },
  });

  return data;
};
