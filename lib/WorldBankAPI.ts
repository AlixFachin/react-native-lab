const API_URL = 'https://api.worldbank.org/v2';

import type { PopAPIBody } from '../lib/ApiTypes';

export const getPopulationTimeSeries: (
  countryCode: string,
  dateBegin: string,
  dateEnd: string,
) => Promise<PopAPIBody> = async (
  countryCode: string,
  dateBegin: string,
  dateEnd: string,
) => {
  const url = `${API_URL}/country/${countryCode}/indicator/SP.POP.TOTL?date=${dateBegin}:${dateEnd}&format=json`;

  const response = await fetch(url);
  if (response.status !== 200) {
    return [];
  }
  return await response.json();
};
