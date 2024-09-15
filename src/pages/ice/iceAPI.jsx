import { useQuery } from "react-query";

const fetchIceData = async () => {
  const response = await fetch("https://global-warming.org/api/arctic-api");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();

  const filteredData = Object.entries(result.arcticData.data)
    .filter(([key]) => key !== "198712" && key !== "198801")
    .map(([key, value]) => {
      const year = key.slice(0, 4);
      const month = key.slice(4, 6);
      return {
        yearMonth: `${year},${month}`,
        value: value.value,
      };
    });

  return filteredData;
};

export const useIceData = () => {
  return useQuery("iceData", fetchIceData);
};
