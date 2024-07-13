import classNames from 'classnames'
import { useEffect, useRef } from 'react'

function adjustHeight(textarea: HTMLTextAreaElement) {
  const borderTopWidth = +getComputedStyle(textarea).borderTopWidth.slice(0, -2)
  const borderBottomWidth = +getComputedStyle(textarea).borderBottomWidth.slice(0, -2)
  const borderWidth = borderTopWidth + borderBottomWidth

  textarea.style.height = 'inherit'
  textarea.style.height = `${textarea.scrollHeight + borderWidth}px`
}

export const TextareaAutosize = ({
  rows = 1,
  onChange,
  className,
  ...textareaProps
}: React.ComponentProps<'textarea'>) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const textareaClassName = classNames('resize-none overflow-hidden', className)

  useEffect(() => {
    const listener = () => adjustHeight(textareaRef.current!)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [])

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    adjustHeight(textareaRef.current!)
    onChange?.(event)
  }

  return (
    <textarea ref={textareaRef} rows={rows} onChange={handleChange} className={textareaClassName} {...textareaProps} />
  )
}
