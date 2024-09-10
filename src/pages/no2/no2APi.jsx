import { useQuery } from "react-query";

const fetchNo2Data = async () => {
  const response = await fetch(
    "https://global-warming.org/api/nitrous-oxide-api"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.nitrous;
};

export const useNo2Data = () => {
  return useQuery("no2Data", fetchNo2Data);
};
