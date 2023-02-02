import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagsList, apiUrl } from "../../constants";

const baseUrl = `${apiUrl}/post`;

const headers = {
  token: sessionStorage.getItem("auth"),
};

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getById: builder.query({
      query: (id) => ({ url: `index?id=${id}`, headers }),
      transformResponse: (response) => {
        const tags = response.tags.map((id) => {
          return tagsList.find((tag) => tag.id === id);
        });
        return { ...response, tags };
      },
      providesTags: ["Post"],
    }),
    get: builder.query({
      query: (tag) => `get?tag=${tag ?? ""}`,
      providesTags: ["Post"],
    }),
    create: builder.mutation({
      query: (post) => ({
        url: `create`,
        method: "POST",
        body: post,
        headers,
      }),
      invalidatesTags: ["Post"],
    }),
    updateById: builder.mutation({
      query: ({ id, post }) => ({
        url: `update?id=${id}`,
        method: "PUT",
        body: post,
        headers,
      }),
      invalidatesTags: ["Post"],
    }),
    deleteById: builder.mutation({
      query: (postId) => ({
        url: `delete?id=${postId}`,
        method: "DELETE",
        headers,
      }),
      invalidatesTags: ["Post"],
    }),
    toggleLike: builder.mutation({
      query: (id) => ({
        url: `toggle-like?id=${id}`,
        method: "PATCH",
        headers,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetByIdQuery,
  useGetQuery,
  useCreateMutation,
  useUpdateByIdMutation,
  useDeleteByIdMutation,
  useToggleLikeMutation,
} = postApi;
