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

export const formSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForm: builder.query({
      query: () => 'form/form-get',
      transformResponse: (response: any) => {
        // return parseOptions(response.data);
        return response.data;
      },
      providesTags: ['Form'],
    }),

    addForm: builder.mutation({
      query: (data) => ({
        url: 'form/form-create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Form'],
    }),

    updateForm: builder.mutation({
      query: (data) => ({
        url: '/wallet/template/update',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Form'],
    }),

    deleteForm: builder.mutation({
      query: (data) => ({
        url: '/wallet/template/delete',
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Form'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetFormQuery,
  useAddFormMutation,
  useUpdateFormMutation,
  useDeleteFormMutation,
} = formSlice;
