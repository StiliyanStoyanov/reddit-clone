import { api } from './api'

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    example: builder.mutation({
      queryFn: async (args) => {
        return { data: null }
      }
    })
  }),
  overrideExisting: false
})

export const { useExampleMutation } = authApi
