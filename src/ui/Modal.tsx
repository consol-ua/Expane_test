import { FC } from 'react'

export const Modal: FC<{ close: () => void }> = ({ close, children }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="fixed inset-0" aria-hidden="true" onClick={close}>
        <div className="absolute inset-0 bg-gray-500 opacity-75" />
      </div>

      {children}
    </div>
  )
}
