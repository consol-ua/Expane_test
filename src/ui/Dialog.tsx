import { FC } from 'react'

export const Dialog: DialogComponent = ({ children }) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-xl transform w-128"
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  )
}

const DialogTitle: FC = ({ children }) => {
  return (
    <div className="bg-gray-50 py-3 px-6">
      <h3 className="text-lg font-medium text-gray-900">{children}</h3>
    </div>
  )
}

const DialogBody: FC = ({ children }) => {
  return <div className="p-6 py-8">{children}</div>
}

const DialogFooter: FC = ({ children }) => {
  return <div className="bg-gray-50 py-3 px-6 flex flex-row-reverse">{children}</div>
}

type DialogComponent = FC & {
  Title: typeof DialogTitle
  Body: typeof DialogBody
  Footer: typeof DialogFooter
}

Dialog.Title = DialogTitle
Dialog.Body = DialogBody
Dialog.Footer = DialogFooter
