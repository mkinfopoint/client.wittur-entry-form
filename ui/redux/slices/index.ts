// Update the import path below to the correct relative path based on your project structure
import { APP_CONFIG } from '../../config/app_config';
// import { getToken, handleLogout } from '@/lib/utils';
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

/**
 * Base query with dynamic headers and credentials support
 */
const baseQuery = fetchBaseQuery({
  baseUrl: APP_CONFIG.API_URL,
  credentials: 'include', // ✅ Enable cookies in requests
  prepareHeaders: (headers: Headers) => {
    // const token: string | null = getToken();

    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }

    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

/**
 * Custom base query to handle token refresh on 401
 */
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // If 401 Unauthorized, try to refresh the token
  // @ts-ignore
  if (result.error?.originalStatus === 401) {
    console.warn('🔁 Token expired. Attempting refresh...');

    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

    if (refreshResult.data) {
      const { token, refreshToken } = refreshResult.data as {
        token: string;
        refreshToken: string;
      };

      // Store new tokens
      localStorage.setItem(APP_CONFIG.TOKEN_KEY, token);
      localStorage.setItem(APP_CONFIG.REFRESH_TOKEN_KEY, refreshToken);

      // Update refreshToken cookie (optional if server handles it)
      document.cookie = `${
        APP_CONFIG.REFRESH_TOKEN_KEY
      }=${refreshToken}; path=/; max-age=${7 * 24 * 60 * 60}`;

      // Retry original request with updated token
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.error('🔒 Refresh token failed. Logging out...');
      // handleLogout('Session expired, please sign in again');
    }
  }

  return result;
};

/**
 * API slice
 */
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Entry'],
  endpoints: () => ({}),
});
