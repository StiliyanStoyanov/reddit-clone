type Keys = 'Escape' | 'Backspace' | 'ArrowUp' | 'ArrowDown'
type KeyHandlers = { [key in Keys]?: (e: KeyboardEvent) => void }
type KeyboardEventTypes = 'keydown' | 'keyup'
type ThemeModes = 'dark' | 'light'
