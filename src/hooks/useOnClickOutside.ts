import { useEffect, useRef } from 'react'

type useOnClickOutsideProps = {
  ref: React.RefObject<HTMLElement>
  handler?: (e: MouseEvent) => void
  disableListener?: boolean
}

export const useOnClickOutside = ({ ref, handler, disableListener = false }: useOnClickOutsideProps) => {
  const handlerRef = useRef(handler)
  handlerRef.current = handler

  useEffect(() => {
    const element = ref?.current
    if (disableListener || !element) return

    const handleClickOutside = (e: MouseEvent) => {
      const isInside = element.contains(e.target as Node)
      !isInside && handlerRef.current?.(e)
    }

    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [disableListener, ref])
}
