import { createPortal } from 'react-dom'

export interface PortalProps extends React.PropsWithChildren {
  portalElement?: HTMLElement
}

export const Portal = ({ portalElement, children }: PortalProps) => {
  return createPortal(children, portalElement || document.getElementById('portal')!)
}
