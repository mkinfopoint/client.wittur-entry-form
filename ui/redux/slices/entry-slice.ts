'use client';

import { apiSlice } from '.';

// function parseOptions(data: any) {
//   return data.map((template: any) => ({
//     ...template,
//     fields: template.fields.map((field: any) => ({
//       ...field,
//       options: field.options ? JSON.parse(field.options) : null, // Convert only if options exist
//     })),
//   }));
// }

export const entrySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEntry: builder.query({
      query: () => 'entries-router',
      transformResponse: (response: any) => {
        // return parseOptions(response.data);
        return response.entries;
      },
      providesTags: ['Entry'],
    }),

    addEntry: builder.mutation({
      query: (data) => ({
        url: 'entries-router/entries-create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Entry'],
    }),

    updateEntry: builder.mutation({
      query: (data) => ({
        url: '/wallet/template/update',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Entry'],
    }),

    deleteEntry: builder.mutation({
      query: (data) => ({
        url: '/wallet/template/delete',
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Entry'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetEntryQuery,
  useAddEntryMutation,
  useUpdateEntryMutation,
  useDeleteEntryMutation,
} = entrySlice;
