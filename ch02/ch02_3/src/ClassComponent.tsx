import {Component} from 'react'
type ClProps = {
  href: string
  text: string
}
export default class ClassComponent extends Component<ClProps> {
  render() {
    const {href, text} = this.props
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
  }
}
