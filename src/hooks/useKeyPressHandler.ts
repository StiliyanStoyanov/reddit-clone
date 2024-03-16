import { useEffect, useRef } from 'react'

type UseKeyPressListenerOptions = {
  keyHandlers: KeyHandlers
  eventType?: KeyboardEventTypes
  disableListener?: boolean
}

export const useKeyPressListener = ({
  keyHandlers = {},
  eventType = 'keydown',
  disableListener = false,
}: UseKeyPressListenerOptions) => {
  const keyHandlersRef = useRef(keyHandlers)
  keyHandlersRef.current = keyHandlers

  useEffect(() => {
    if (disableListener) return
    const handleKeyPress = (event: KeyboardEvent) => {
      const handler = keyHandlersRef.current[event.key as Keys]
      if (handler) handler(event)
    }

    window.addEventListener(eventType, handleKeyPress)
    return () => {
      window.removeEventListener(eventType, handleKeyPress)
    }
  }, [eventType, disableListener])
}
