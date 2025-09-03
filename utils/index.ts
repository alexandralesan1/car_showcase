export async function fetchCars() {
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
