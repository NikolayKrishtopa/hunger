import { useState, useEffect } from 'react'
import booking from '../images/book-img.png'
import HomeButton from './HomeButton'
import Form from './Form'
import Input from './Input'
import Select from './Select'
import { validateInput } from '../utils/utils'

export default function Booking(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [people, setPeople] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)

  const [nameValidationMessage, setNameValidationMessage] = useState('')
  const [emailValidationMessage, setEmailValidationMessage] = useState('')
  const [phoneValidationMessage, setPhoneValidationMessage] = useState('')
  const [dateValidationMessage, setDateValidationMessage] = useState('')
  const [timeValidationMessage, setTimeValidationMessage] = useState('')
  const [peopleValidationMessage, setPeopleValidationMessage] = useState('')

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
    setDateValidationMessage(validateInput(date, 'date', 0, 'date'))
  }, [date])
  useEffect(() => {
    setTimeValidationMessage(validateInput(time, 'time', 0, 'select'))
  }, [time])
  useEffect(() => {
    setPeopleValidationMessage(validateInput(people, 'people', 0, 'select'))
  }, [people])

  useEffect(() => {
    setIsFormValid(false)
    nameValidationMessage.length === 0 &&
      emailValidationMessage.length === 0 &&
      phoneValidationMessage.length === 0 &&
      dateValidationMessage.length === 0 &&
      timeValidationMessage.length === 0 &&
      setIsFormValid(true)
  })

  return (
    <section className="section section_name_booking">
      <HomeButton {...props} />
      <div className="flex-column">
        <h2 className="section__title">book a table</h2>
        <div className="rectangle rectangle_place_booking"></div>
        <Form type="booking" isValid={isFormValid} buttonText="BOOK NOW">
          <Input
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
          <Select
            name="people"
            id="people"
            type="select"
            className="booking-form__field"
            value={people}
            onChange={(evt) => {
              setPeople(evt.target.value)
            }}
            validationMessage={peopleValidationMessage}
          >
            <option value="none">People</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </Select>
          <Input
            validationMessage={dateValidationMessage}
            type="date"
            id="date"
            className="booking-form__field"
            placeholder="Date (mm/dd)"
            value={date}
            onChange={(evt) => {
              setDate(evt.target.value)
            }}
          />
          <Select
            name="time"
            id="time"
            type="select"
            className="booking-form__field"
            value={time}
            onChange={(evt) => {
              setTime(evt.target.value)
            }}
            validationMessage={timeValidationMessage}
          >
            <option value="none">Time</option>
            <option value="morning">morning</option>
            <option value="noon">noon</option>
            <option value="evening">evening</option>
          </Select>
        </Form>
      </div>
      <img src={booking} alt="booking" className="image image_place_booking" />
      <p className="section__footer">
        Mon - Fri: <span className="section__footer_accent"> 8PM - 10PM</span>,
        Sat - Sun: <span className="section__footer_accent"> 8PM - 3AM</span>,
        Phone:
        <span className="section__footer_accent">
          +40 729 131 637/+40 726 458 782
        </span>
      </p>
    </section>
  )
}
