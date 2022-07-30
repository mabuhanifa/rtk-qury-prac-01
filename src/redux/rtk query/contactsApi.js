import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),

  tagTypes: ["Contact"],

  endpoints: (builder) => ({
    contacts: builder.query({
      query: (url) => ({
        url: `/${url}`,
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    contact: builder.query({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),

    addContact: builder.mutation({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
