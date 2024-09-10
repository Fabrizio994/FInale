import { useQuery } from "react-query";

const fetchMethaneData = async () => {
  const response = await fetch("https://global-warming.org/api/methane-api");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.methane;
};

export const useMethaneData = () => {
  return useQuery("methaneData", fetchMethaneData);
};
