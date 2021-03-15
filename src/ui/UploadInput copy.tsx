import { FC, forwardRef, InputHTMLAttributes } from 'react'

interface UploadInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  containerClassName?: string
  errorMessage?: string
  accept?: string
}
export const UploadInput: FC<UploadInputProps> = forwardRef<HTMLInputElement, UploadInputProps>((props, ref) => {
  const { label, containerClassName, errorMessage, ...restProps } = props

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
          type="file"
          name="price"
          className={inputClassName}
          accept=".jpg,.png,.jpeg"
          {...restProps}
        />
      </div>

      {errorMessage ? <p className="text-xs text-red-500">{errorMessage}</p> : null}
    </>
  )

  return containerClassName ? <div className={containerClassName}>{content}</div> : content
})
