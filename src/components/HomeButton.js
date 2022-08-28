import homeIcon from '../images/home-icon.png'

export default function HomeButton(props) {
  const { onChangeMode } = props
  return (
    <button
      type="button"
      onClick={() => onChangeMode('home')}
      className="home-button"
    >
      <img src={homeIcon} className="home-button__icon" />
    </button>
  )
}
