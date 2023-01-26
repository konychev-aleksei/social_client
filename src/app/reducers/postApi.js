import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5005/post";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getById: builder.query({
      query: (id) => `get?id=${id}`,
    }),
    getByNick: builder.query({
      query: (nick) => `index?nick=${nick}`,
    }),
    search: builder.query({
      query: (id) => `post?id=${id}`,
      invalidatesTags: ["Post"],
    }),
    create: builder.mutation({
      query: (post) => ({
        url: `create`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    updateById: builder.mutation({
      query: (post) => ({
        url: `update?id=${postId}`,
        method: "PUT",
        body: post,
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
        url: `post?id=${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetByIdQuery,
  useGetByNickQuery,
  useSearchQuery,
  useCreateMutation,
  useUpdateByIdMutation,
  useDeleteByIdMutation,
  useToggleLikeMutation,
} = postApi;
