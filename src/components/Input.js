export default function Input(props) {
  const {
    validationMessage,
    id,
    className,
    placeholder,
    value,
    onChange,
    type,
    modifier,
  } = props
  return (
    <div className={`booking-form__input-container ${modifier && modifier}`}>
      <input
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
        onChange={onChange}
      />
      <p className="booking-form__input-error">{validationMessage}</p>
    </div>
  )
}
