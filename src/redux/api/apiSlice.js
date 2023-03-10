import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/' }),
  endpoints: (builder) => ({
    getRockets: builder.query({
      query: () => '/v4/rockets',
    }),
    getMissions: builder.query({
      query: () => '/v3/missions',
    }),
  }),
});

const { useGetRocketsQuery } = apiSlice;
const { useGetMissionsQuery } = apiSlice;

export { apiSlice, useGetRocketsQuery, useGetMissionsQuery };
