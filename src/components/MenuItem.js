export default function MenuItem(props) {
  const { name, description, price } = props
  return (
    <div className="menu__item">
      <p className="menu__row-main">
        {name} . . . .{price} EUR
      </p>
      <p className="menu__row-extra">{description}</p>
    </div>
  )
}
