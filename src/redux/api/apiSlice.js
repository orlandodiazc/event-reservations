import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const addReservedProperty = (res) => res.map((obj) => ({ ...obj, reserved: false }));

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/' }),
  endpoints: (builder) => ({
    getRockets: builder.query({
      query: () => '/v4/rockets',
      transformResponse: (response) => addReservedProperty(response),
    }),
    getMissions: builder.query({
      query: () => '/v3/missions',
      transformResponse: (response) => addReservedProperty(response),
    }),
  }),
});

const { useGetRocketsQuery } = apiSlice;
const { useGetMissionsQuery } = apiSlice;

export { apiSlice, useGetRocketsQuery, useGetMissionsQuery };
