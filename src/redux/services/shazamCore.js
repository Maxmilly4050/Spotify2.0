import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// This code defines a Redux API service using RTK Query to interact with the Shazam Core API.
  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '​4df89369a1msh896ceb0bc9301f4p1c673ajsn0c8416e8657d'); 
            headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        // getSongDetails: builder.query({ query: (songId) => `/tracks/details?track_id=${songId}` }),
        // getSongRelated: builder.query({ query: (songId) => `/tracks/related?track_id=${songId}` }),
        // getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
        // getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
    })
});
// Export hooks for the defined endpoints
export const {
    useGetTopChartsQuery,
    // useGetSongDetailsQuery,
    // useGetSongRelatedQuery,
    // useGetArtistDetailsQuery,
    // useGetSongsByGenreQuery
} = shazamCoreApi;