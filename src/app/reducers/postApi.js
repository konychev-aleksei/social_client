import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import categories from "../../constants/categories";

const baseUrl = "http://localhost:5005/post";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getById: builder.query({
      query: (id) => `index?id=${id}`,
      transformResponse: (response) => {
        const tags = response.tags.map((tag) => {
          return categories.find((category) => category.tag === tag);
        });
        return { ...response, tags };
      },
    }),
    get: builder.query({
      query: (tag) => `get?tag=${tag ?? ""}`,
      invalidatesTags: ["Post"],
    }),
    create: builder.mutation({
      query: (post) => ({
        url: `create`,
        method: "POST",
        body: post,
        headers: {
          token: sessionStorage.getItem("auth"),
        },
      }),
      invalidatesTags: ["Post"],
    }),
    updateById: builder.mutation({
      query: ({ id, post }) => ({
        url: `update?id=${id}`,
        method: "PUT",
        body: post,
        headers: {
          token: sessionStorage.getItem("auth"),
        },
      }),
      invalidatesTags: ["Post"],
    }),
    deleteById: builder.mutation({
      query: (postId) => ({
        url: `delete?id=${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    toggleLike: builder.mutation({
      query: (id) => ({
        url: `toggle-like?id=${id}`,
        method: "PATCH",
        headers: {
          token: sessionStorage.getItem("auth"),
        },
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
