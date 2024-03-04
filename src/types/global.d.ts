type Keys = 'Escape' | 'Backspace' | 'ArrowUp' | 'ArrowDown'
type KeyHandlers = { [key in Keys]?: (e: KeyboardEvent) => void }
type KeyboardEventTypes = 'keydown' | 'keyup'
type ThemeModes = 'dark' | 'light'

type ReactButtonProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ReactDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type ReactAnchorProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
type ReactInputProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ReactFormProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>
