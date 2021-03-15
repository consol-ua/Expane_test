import { FC, forwardRef, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  label?: string
  containerClassName?: string
  errorMessage?: string
}
export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, placeholder, containerClassName, errorMessage, ...restProps } = props

  let inputClassName = 'block w-full px-3 text-sm rounded '
  inputClassName += errorMessage
    ? 'border-red-400 focus:ring-red-400 focus:border-red-400'
    : 'border-primary-100 focus:ring-primary-400 focus:border-primary-400'

  const content = (
    <>
      {label && (
        <label className="block text-sm leading-3 font-medium text-gray-500">{label}</label>
      )}

      <div className={'mt-2 relative rounded-md shadow-sm w-full'}>
        <input
          ref={ref}
          type="text"
          name="price"
          className={inputClassName}
          placeholder={placeholder}
          {...restProps}
        />
      </div>

      {errorMessage ? <p className="text-xs text-red-500">{errorMessage}</p> : null}
    </>
  )

  return containerClassName ? <div className={containerClassName}>{content}</div> : content
})
