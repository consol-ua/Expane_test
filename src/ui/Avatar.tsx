import { FC, memo } from 'react'

type Props = {
  name: string
  url?: string
  className?: string
  onClick?: () => void
}
export const Avatar: FC<Props> = memo(({ url, name, className, onClick }) => {
  const styles = 'w-10 h-10 rounded-full ' + (className ?? '')
  return url ? (
    <img alt={name} className={styles} src={url} onClick={onClick} />
  ) : (
    <div className={styles + ' bg-primary-500 flex items-center justify-center'} onClick={onClick}>
      <span className="text-lg text-white">{name[0]}</span>
    </div>
  )
})
