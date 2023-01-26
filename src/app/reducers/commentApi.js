import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5050/comment/";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getByPostId: builder.query({
      query: (postId) => `get?id=${postId}`,
    }),
    create: builder.query({
      query: (comment) => ({
        url: `create`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comment"],
    }),
    deleteById: builder.query({
      query: (commentId) => ({
        url: `delete?id=${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const { usePostByQuery } = commentApi;
