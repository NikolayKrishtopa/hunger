import HomeButton from './HomeButton'

export default function Gallery(props) {
  return (
    <div className="temp">
      <HomeButton {...props} />
      <p className="temp__text">
        This page is being under redesign now. Sorry for inconvenience...
      </p>
    </div>
  )
}
