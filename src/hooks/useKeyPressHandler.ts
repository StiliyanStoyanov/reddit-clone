import { useEffect, useRef } from 'react'

type UseKeyPressListenerOptions = {
  keyHandlers: KeyHandlers
  eventType?: KeyboardEventTypes
  skipHandler?: boolean
}

export const useKeyPressListener = ({
  keyHandlers = {},
  eventType = 'keydown',
  skipHandler = false,
}: UseKeyPressListenerOptions) => {
  const keyHandlersRef = useRef(keyHandlers)
  keyHandlersRef.current = keyHandlers

  useEffect(() => {
    if (skipHandler) return
    const handleKeyPress = (event: KeyboardEvent) => {
      const handler = keyHandlersRef.current[event.key as Keys]
      if (handler) handler(event)
    }

    window.addEventListener(eventType, handleKeyPress)
    return () => {
      window.removeEventListener(eventType, handleKeyPress)
    }
  }, [eventType, skipHandler])
}
