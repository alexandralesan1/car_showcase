import { CarProps, FilterProps } from "@/types";

// Array local de mașini
export const carsData: CarProps[] = [
  {
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    city_mpg: 25,
    highway_mpg: 30,
    combination_mpg: 28,
    cylinders: 0,
    displacement: 0,
    drive: "rwd",
    transmission: "a",
    fuel_type: "electricity",
    class: "sedan",
  },
  {
    make: "BMW",
    model: "X5",
    year: 2021,
    city_mpg: 18,
    highway_mpg: 25,
    combination_mpg: 21,
    cylinders: 8,
    displacement: 4.0,
    drive: "awd",
    transmission: "a",
    fuel_type: "gas",
    class: "luxury",
  },
  {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    city_mpg: 25,
    highway_mpg: 32,
    combination_mpg: 28,
    cylinders: 4,
    displacement: 1.6,
    drive: "fwd",
    transmission: "a",
    fuel_type: "gas",
    class: "compact car",
  },

  {
    make: "Acura",
    model: "NSX EV",
    year: 2022,
    city_mpg: 20,
    highway_mpg: 25,
    combination_mpg: 22,
    cylinders: 0,
    displacement: 0,
    drive: "awd",
    transmission: "a",
    fuel_type: "electricity",
    class: "sports",
  },
  {
    make: "Acura",
    model: "ILX",
    year: 2022,
    city_mpg: 25,
    highway_mpg: 33,
    combination_mpg: 28,
    cylinders: 4,
    displacement: 2.4,
    drive: "fwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sedan",
  },
  {
    make: "Alfa Romeo",
    model: "Giulia",
    year: 2022,
    city_mpg: 22,
    highway_mpg: 30,
    combination_mpg: 25,
    cylinders: 4,
    displacement: 2.0,
    drive: "rwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sports",
  },
  {
    make: "Aston Martin",
    model: "DB11",
    year: 2021,
    city_mpg: 16,
    highway_mpg: 24,
    combination_mpg: 19,
    cylinders: 8,
    displacement: 4.0,
    drive: "rwd",
    transmission: "a",
    fuel_type: "gas",
    class: "luxury",
  },
  {
    make: "Audi",
    model: "A4",
    year: 2022,
    city_mpg: 23,
    highway_mpg: 34,
    combination_mpg: 27,
    cylinders: 4,
    displacement: 2.0,
    drive: "awd",
    transmission: "a",
    fuel_type: "gas",
    class: "sedan",
  },
  {
    make: "Bentley",
    model: "Continental",
    year: 2021,
    city_mpg: 15,
    highway_mpg: 25,
    combination_mpg: 19,
    cylinders: 8,
    displacement: 6.0,
    drive: "awd",
    transmission: "a",
    fuel_type: "gas",
    class: "luxury",
  },
  {
    make: "BMW",
    model: "X5",
    year: 2022,
    city_mpg: 20,
    highway_mpg: 28,
    combination_mpg: 24,
    cylinders: 6,
    displacement: 3.0,
    drive: "awd",
    transmission: "a",
    fuel_type: "gas",
    class: "luxury",
  },
  {
    make: "Buick",
    model: "Enclave",
    year: 2021,
    city_mpg: 18,
    highway_mpg: 26,
    combination_mpg: 21,
    cylinders: 6,
    displacement: 3.6,
    drive: "awd",
    transmission: "a",
    fuel_type: "gas",
    class: "SUV",
  },
  {
    make: "Cadillac",
    model: "CT5",
    year: 2022,
    city_mpg: 20,
    highway_mpg: 30,
    combination_mpg: 24,
    cylinders: 4,
    displacement: 2.0,
    drive: "rwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sedan",
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    year: 2021,
    city_mpg: 22,
    highway_mpg: 32,
    combination_mpg: 26,
    cylinders: 4,
    displacement: 1.5,
    drive: "fwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sedan",
  },
  {
    make: "Chrysler",
    model: "300",
    year: 2021,
    city_mpg: 18,
    highway_mpg: 27,
    combination_mpg: 22,
    cylinders: 6,
    displacement: 3.6,
    drive: "rwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sedan",
  },
  {
    make: "Citroen",
    model: "C5",
    year: 2022,
    city_mpg: 20,
    highway_mpg: 28,
    combination_mpg: 23,
    cylinders: 4,
    displacement: 1.6,
    drive: "fwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sedan",
  },
  {
    make: "Dodge",
    model: "Challenger",
    year: 2022,
    city_mpg: 16,
    highway_mpg: 25,
    combination_mpg: 19,
    cylinders: 6,
    displacement: 3.6,
    drive: "rwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sports",
  },
  {
    make: "Ferrari",
    model: "488",
    year: 2021,
    city_mpg: 12,
    highway_mpg: 18,
    combination_mpg: 14,
    cylinders: 8,
    displacement: 3.9,
    drive: "rwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sports",
  },
  {
    make: "Fiat",
    model: "500",
    year: 2022,
    city_mpg: 30,
    highway_mpg: 40,
    combination_mpg: 34,
    cylinders: 4,
    displacement: 1.4,
    drive: "fwd",
    transmission: "a",
    fuel_type: "gas",
    class: "compact car",
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2022,
    city_mpg: 18,
    highway_mpg: 25,
    combination_mpg: 21,
    cylinders: 6,
    displacement: 3.7,
    drive: "rwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sports",
  },
  {
    make: "GMC",
    model: "Sierra",
    year: 2021,
    city_mpg: 15,
    highway_mpg: 22,
    combination_mpg: 18,
    cylinders: 6,
    displacement: 4.3,
    drive: "awd",
    transmission: "a",
    fuel_type: "gas",
    class: "truck",
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2022,
    city_mpg: 25,
    highway_mpg: 35,
    combination_mpg: 29,
    cylinders: 4,
    displacement: 2.0,
    drive: "fwd",
    transmission: "a",
    fuel_type: "gas",
    class: "sedan",
  },
];

// ========================
// Filtrare locală
// ========================
export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  let filteredCars = [...carsData];

  if (manufacturer) {
    filteredCars = filteredCars.filter(
      (car) => car.make.toLowerCase() === manufacturer.toLowerCase()
    );
  }
  if (fuel) {
    filteredCars = filteredCars.filter(
      (car) => car.fuel_type.toLowerCase() === fuel.toLowerCase()
    );
  }
  if (year) {
    filteredCars = filteredCars.filter((car) => car.year === Number(year));
  }
  if (model) {
    filteredCars = filteredCars.filter(
      (car) => car.model.toLowerCase() === model.toLowerCase()
    );
  }

  return filteredCars.slice(0, limit || 10);
}

// ========================
// Search params
// ========================
export function updateSearchParams(param: string, value: string) {
  const searchParams = new URLSearchParams(window.location.search);

  if (value) {
    searchParams.set(param, value);
  } else {
    searchParams.delete(param);
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
}

export function deleteSearchParams(param: string) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(param);
  return `${window.location.pathname}?${searchParams.toString()}`;
}

// ========================
// Generare URL imagine dummy
// ========================
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  // Folosim un URL generic sau placeholder
  const baseUrl = "https://cdn.imagin.studio/getimage";

  // Dacă vrei, poți folosi numele mașinii ca parte din query pentru a simula diferite imagini
  const url = new URL(baseUrl);
  url.searchParams.append("make", car.make);
  url.searchParams.append("model", car.model.split(" ")[0]);
  url.searchParams.append("year", `${car.year}`);
  url.searchParams.append("angle", angle || "front");

  // Folosim o cheie generică (sau poți pune NEXT_PUBLIC_IMAGIN_API_KEY dacă ai)
  url.searchParams.append("customer", "demo");

  return url.toString();
};

// ========================
// Calcul chirie
// ========================
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
