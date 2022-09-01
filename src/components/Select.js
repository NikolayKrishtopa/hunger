export default function Select(props) {
  const {
    validationMessage,
    id,
    className,
    placeholder,
    value,
    onChange,
    type,
    children,
  } = props
  return (
    <div className="booking-form__input-container">
      <select
        type={type}
        id={id}
        name={id}
        className={`${className} ${
          validationMessage === ''
            ? `${className}_state_valid`
            : `${className}_state_invalid`
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(evt) => {
          onChange(evt)
        }}
      >
        {children}
      </select>
      <p className="booking-form__input-error">{validationMessage}</p>
    </div>
  )
}
