import { useEffect, useRef } from 'react'

type useOnClickOutsideProps = {
  ref: React.RefObject<HTMLElement>
  handler?: (e: MouseEvent) => void
  skipHandler?: boolean
}

export const useOnClickOutside = ({ ref, handler, skipHandler = false }: useOnClickOutsideProps) => {
  const handlerRef = useRef(handler)
  handlerRef.current = handler

  useEffect(() => {
    const element = ref?.current
    const handler = handlerRef.current
    if (skipHandler || !element) return

    const handleClickOutside = (e: MouseEvent) => {
      const isInside = element.contains(e.target as Node)
      !isInside && handler?.(e)
    }

    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [skipHandler, ref])
}
