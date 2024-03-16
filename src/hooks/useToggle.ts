import { useMemo, useState } from 'react'

export interface UseToggleMethods {
  open: () => void
  close: () => void
  toggle: () => void
}

export const useToggle = (initial: boolean = false) => {
  const [state, setState] = useState(initial)

  const methods = useMemo(
    () => ({
      toggle: () => setState((prevState) => !prevState),
      close: () => setState(false),
      open: () => setState(true),
    }),
    [],
  )

  return [state, methods] as const
}
