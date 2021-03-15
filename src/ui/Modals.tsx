import { FC } from 'react'
import { createPortal } from 'react-dom'

export const Modals: FC = ({ children }) =>
  createPortal(children, document.getElementById('modals')!)
