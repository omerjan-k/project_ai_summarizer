import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://news-article-data-extract-and-summarization1.p.rapidapi.com/';
const apiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY; // Replace with your actual API key

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('X-RapidAPI-Key', apiKey);
      headers.set('X-RapidAPI-Host', 'news-article-data-extract-and-summarization1.p.rapidapi.com');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (articleUrl) => ({
        url: 'extract/',
        method: 'POST',
        body: {
          url: articleUrl,
        },
      }),
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;

