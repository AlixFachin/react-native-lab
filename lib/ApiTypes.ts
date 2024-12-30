import z from 'zod';

export const CountryDescription = z.object({
  id: z.string(),
  value: z.string(),
});

export const PopTimeSeriesMetaData = z.object({
  page: z.number(),
  pages: z.number(),
  per_page: z.number(),
  total: z.number(),
  sourceId: z.string(),
  lastupdated: z.string(),
});

export const IndicatorMetaDataScheme = z.object({
  indicator: z.object({
    id: z.string(),
    value: z.string(),
  }),
  country: CountryDescription,
  countryIso3Code: z.string(),
  date: z.string(),
  value: z.number(),
  unit: z.string(),
  obs_status: z.string(),
  decimal: z.number(),
});

export const PopTimeSeriesItem = z.object({});

export const PopAPIBodyScheme = z.tuple([
  PopTimeSeriesMetaData,
  z.array(IndicatorMetaDataScheme),
]);

export type PopAPIBody = z.infer<typeof PopAPIBodyScheme>;
export type PopAPIItem = z.infer<typeof PopTimeSeriesItem>;
