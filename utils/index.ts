import { CarProps, FilterProps } from "@/types";

export async function fetchCars(
  filters: FilterProps,
  p0?: any,
  year?: any,
  p1?: any,
  fuel?: any,
  p2?: any,
  limit?: any,
  p3?: any,
  model?: any,
  p4?: any
) {
  const headers = {
    "x-rapidapi-key": "d034d17f65mshed5a2d930442816p18bc98jsn55351e0d4644",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number | string, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const effectiveMpg = typeof city_mpg === "number" ? city_mpg : 0;

  const mileageRate = effectiveMpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
