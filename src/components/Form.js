export default function Form(props) {
  const { children, type, isValid, buttonText } = props

  return (
    <form
      className={`booking-form booking-form_place_${type}`}
      onSubmit={(e) => e.preventDefault()}
    >
      {children}
      <button
        disabled={!isValid}
        type="submit"
        className={`button button_place_${type}-form ${
          isValid && 'button_active'
        }`}
      >
        {buttonText}
      </button>
    </form>
  )
}
