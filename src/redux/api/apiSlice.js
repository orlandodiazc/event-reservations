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

const updateReservation = (id, endpoint) =>
  apiSlice.util.updateQueryData(endpoint, undefined, (draft) =>
    draft.map((obj) => {
      const objId = endpoint === 'getMissions' ? obj.mission_id : obj.id;
      if (objId !== id) return obj;
      return { ...obj, reserved: !obj.reserved };
    }),
  );

const { useGetRocketsQuery, useGetMissionsQuery } = apiSlice;

export { apiSlice, useGetRocketsQuery, useGetMissionsQuery, updateReservation };
