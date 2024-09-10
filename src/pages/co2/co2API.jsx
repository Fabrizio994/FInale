import { useQuery } from "react-query";

const fetchCo2Data = async () => {
  const response = await fetch("https://global-warming.org/api/co2-api");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.co2.map((item) => ({
    ...item,
    yearMonth: `${item.year}-${item.month}`,
  }));
};

export const useCo2Data = () => {
  return useQuery("repoData", fetchCo2Data);
};
