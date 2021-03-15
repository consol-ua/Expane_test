import { FC, forwardRef, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  containerClassName?: string
}
export const Checkbox: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, containerClassName, ...props }, ref) => {
    return (
      <div className={'flex items-center' + (containerClassName ?? '')}>
        <input
          type="checkbox"
          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          {...props}
        />
        {label && <label className="ml-2 block text-sm text-gray-900">{label}</label>}
      </div>
    )
  },
)
