import type {FC} from 'react'

export type ACP = {
  href: string
  text: string
}

const ArrowComponent: FC<ACP> = props => {
  const {href, text} = props
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  )
}
export default ArrowComponent
