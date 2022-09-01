import { useState, useEffect } from 'react'
import HomeButton from './HomeButton'
import Form from './Form'
import Input from './Input'
import { validateInput } from '../utils/utils'

export default function Booking(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)

  const [nameValidationMessage, setNameValidationMessage] = useState('')
  const [emailValidationMessage, setEmailValidationMessage] = useState('')
  const [phoneValidationMessage, setPhoneValidationMessage] = useState('')
  const [messageValidationMessage, setMessageValidationMessage] = useState('')

  useEffect(() => {
    setNameValidationMessage(validateInput(name, 'name', 3, 'text'))
  }, [name])

  useEffect(() => {
    setEmailValidationMessage(validateInput(email, 'email', 3, 'email'))
  }, [email])

  useEffect(() => {
    setPhoneValidationMessage(validateInput(phone, 'phone', 5, 'number'))
  }, [phone])
  useEffect(() => {
    setMessageValidationMessage(validateInput(message, 'message', 3, 'text'))
  }, [message])

  useEffect(() => {
    setIsFormValid(false)
    nameValidationMessage.length === 0 &&
      emailValidationMessage.length === 0 &&
      phoneValidationMessage.length === 0 &&
      messageValidationMessage.length === 0 &&
      setIsFormValid(true)
  })
  return (
    <section className="section section_name_contact">
      <HomeButton {...props} />
      <div className="flex-column">
        <h2 className="section__title">contact</h2>
        <div className="rectangle"></div>
        <p className="section__text section__text_place_contact section__text-accent">
          Please send your message to us using the form below. Our team will
          response as soon as possible.
        </p>
        <Form type="contact" isValid={isFormValid} buttonText="SEND MESSAGE">
          <Input
            modifier="booking-form__input-container_place_contact-name"
            validationMessage={nameValidationMessage}
            id="name"
            className="booking-form__field"
            placeholder="Name"
            value={name}
            onChange={(evt) => {
              setName(evt.target.value)
            }}
          />
          <Input
            modifier="booking-form__input-container_place_contact-email"
            validationMessage={emailValidationMessage}
            id="email"
            className="booking-form__field"
            placeholder="Email"
            value={email}
            onChange={(evt) => {
              setEmail(evt.target.value)
            }}
          />
          <Input
            modifier="booking-form__input-container_place_contact-phone"
            validationMessage={phoneValidationMessage}
            id="phone"
            name="phone"
            className="booking-form__field"
            placeholder="Phone"
            value={phone}
            onChange={(evt) => {
              setPhone(evt.target.value)
            }}
          />
          <Input
            modifier="booking-form__input-container_place_contact-message"
            validationMessage={messageValidationMessage}
            id="message"
            name="message"
            type="textarea"
            className="booking-form__field"
            placeholder="Message"
            value={message}
            onChange={(evt) => {
              setMessage(evt.target.value)
            }}
          />
          <p className="section__footer section__footer_place_contact">
             5th London Boulevard, U.K.  +40 729 131 637/+40 726 458 782 
            office@mindblister.com
          </p>
        </Form>
      </div>
    </section>
  )
}
