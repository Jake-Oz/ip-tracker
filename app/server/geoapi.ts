"use server";

const Geoapi = async (searchValue: string) => {
  const data = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEO_API_KEY}&ipAddress=${searchValue}&domain=${searchValue}`
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};

export default Geoapi;
