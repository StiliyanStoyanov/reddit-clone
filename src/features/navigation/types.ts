import { LinkProps } from 'react-router-dom'

export interface DropdownToggleProps extends React.ComponentProps<'button'> {
  Icon: React.JSX.Element
  isActive?: boolean
}

export interface DropdownButtonProps extends React.ComponentProps<'button'> {
  text: string
  Icon?: React.JSX.Element
}

export interface DropdownIconProps extends React.ComponentProps<'div'> {
  Icon: React.JSX.Element
}

export interface DropdownLinkProps extends LinkProps {
  text: string
  Icon: React.JSX.Element
}
