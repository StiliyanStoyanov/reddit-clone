import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries
// https://redux-toolkit.js.org/rtk-query/usage/code-splitting
export const api = createApi({
	baseQuery: fakeBaseQuery(),
	endpoints: () => ({}),
});