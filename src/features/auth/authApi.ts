import { api } from '../api/api'

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    example: builder.mutation({
      queryFn: async ({ email, password }) => {
        return { data: null }
      }
    })
  }),
  overrideExisting: false
})

export const { useExampleMutation } = authApi
