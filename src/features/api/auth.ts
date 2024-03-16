import { auth, db } from '@/config/firebase'
import { onAuthStateChanged, signOut as _signOut } from 'firebase/auth'
import { onSnapshot, collection, query, where, Unsubscribe, DocumentData } from 'firebase/firestore'
import { api } from './api'

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    authSubscription: builder.query<DocumentData | null, void>({
      queryFn: () => ({ data: null }),
      async onCacheEntryAdded(_, { updateCachedData, cacheEntryRemoved }) {
        let fsUnsub: Unsubscribe | undefined
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (!user) {
            updateCachedData(() => null)
            return fsUnsub?.()
          }
          const q = query(collection(db, 'users'), where('uid', '==', user.uid))
          fsUnsub = onSnapshot(q, (userSnapshot) => {
            updateCachedData(() => userSnapshot.docs[0].data())
          })
        })
        await cacheEntryRemoved
        unsubscribe()
      },
      keepUnusedDataFor: 1,
    }),
  }),
  overrideExisting: false,
})
export const signOut = () => _signOut(auth)
export const { useAuthSubscriptionQuery } = authApi
