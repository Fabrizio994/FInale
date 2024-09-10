import { useQuery } from "react-query";

const fetchTemperatureData = async () => {
  const response = await fetch(
    "https://global-warming.org/api/temperature-api"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.result;
};

// export const useTemperatureData = () => {
//   return useQuery("methaneData", fetchTemperatureData);
// };

export const useTemperatureData = () => {
  return useQuery("temperatureData", fetchTemperatureData, {
    retry: false, // Disabilita i tentativi di ripetizione per mostrare subito l'errore
  });
};
