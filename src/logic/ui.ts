import { useCallback, useState } from 'react'

export const usePopupOpenState = () => {
  const [isOpen, setIsOpen] = useState(false)
  return {
    isOpen,
    openPopup: useCallback(() => setIsOpen(true), []),
    closePopup: useCallback(() => setIsOpen(false), []),
  }
}
