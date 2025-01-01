import countriesData from '../data/countries.json';
import populationData from '../data/population.json';
import populationTable from '../data/populationTable.json';

export const getCountryName = (countryIsoCode: string) => {
  return countriesData.find(country => country.id === countryIsoCode)?.name;
};

export const isRegion = (countryIsoCode: string) => {
  return (
    countriesData.find(country => country.iso2Code === countryIsoCode)?.region
      .id === 'NA'
  );
};

export const createPopulationTable = () => {
  const populationTable: { name: string; population: number }[] = [];
  populationData.forEach(data => {
    if (
      !isRegion(data.countryiso3code) &&
      getCountryName(data.countryiso3code) &&
      data.value
    ) {
      populationTable.push({
        name: getCountryName(data.countryiso3code) as string,
        population: data.value,
      });
    }
  });

  populationTable.sort((a, b) => a.population - b.population);

  console.log(populationTable);
};

export const getRandomCountries = (
  numCountries: number,
  difficulty: number,
) => {
  // We will pick numCountries from the Country Data array and return the data
  // The difficult parameter will determine the range of the request

  const clampedDifficulty = Math.min(10, Math.max(1, difficulty));
  const returnRange = Math.min(
    numCountries * 4,
    Math.floor(((10 - clampedDifficulty) / 10) * populationTable.length),
  );

  const firstIndex = Math.floor(
    Math.random() * (populationTable.length - returnRange),
  );

  console.log(`First index: ${firstIndex}, return range: ${returnRange}`);

  const result = [];
  for (let i = 0; i < numCountries; i++) {
    result.push(
      populationTable[
        firstIndex + Math.floor((i * returnRange) / numCountries)
      ],
    );
  }

  return result;
};
