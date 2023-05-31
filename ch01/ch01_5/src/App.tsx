import * as D from './data'

export default function App() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" title="avatar" alt="t" />
      <img src={D.randomImage()} height="300" title="image" alt="t" />
    </div>
  )
}
