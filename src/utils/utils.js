export function validateInput(value, inputName, minLength, type) {
  return type === 'date' && !value
    ? `please enter ${inputName} of visit`
    : inputName === 'people' && (!value || value === 'none')
    ? `please set qty of ${inputName}`
    : inputName === 'time' && (!value || value === 'none')
    ? `please enter ${inputName} of visit`
    : !value
    ? `please enter your ${inputName}`
    : type === 'number' && !Number(value)
    ? 'only digits acceptable'
    : type === 'email' &&
      (value.split('').filter((e) => e === '@' || e === '.').length < 2 ||
        value.indexOf('@') > value.lastIndexOf('.') ||
        value.length - value.lastIndexOf('.') < 3)
    ? 'please enter email address here'
    : value.length < minLength
    ? `please enter minimum ${minLength} characters at this field`
    : ''
}
