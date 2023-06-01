import type {FC, PropsWithChildren} from 'react'

export type PP = {}

const P: FC<PropsWithChildren<PP>> = props => {
  return <p {...props} />
}

export default P
