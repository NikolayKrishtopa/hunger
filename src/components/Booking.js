import booking from '../images/book-img.png'

export default function Booking() {
  return (
    <section className="section section_name_booking">
      <div className="flex-column">
        <h2 className="section__title">book a table</h2>
        <div className="rectangle rectangle_place_booking"></div>
        <form action="post" className="booking-form booking-form_place_booking">
          <input
            required
            type="text"
            id="name"
            name="name"
            className="booking-form__field"
            placeholder="Name"
          />
          <input
            required
            type="email"
            id="email"
            name="email"
            className="booking-form__field"
            placeholder="Email"
          />
          <input
            required
            type="number"
            id="phone"
            name="phone"
            className="booking-form__field"
            placeholder="Phone"
          />
          <select
            name="people"
            id="people"
            className="booking-form__field"
            placeholder="People"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          <input
            type="date"
            id="date"
            className="booking-form__field"
            placeholder="Date (mm/dd)"
          />
          <select
            name="people"
            id="people"
            className="booking-form__field"
            placeholder="People"
          >
            <option value="morning">morning</option>
            <option value="noon">noon</option>
            <option value="evening">evening</option>
          </select>
          <button
            type="submit"
            className="button button_active button_place_booking-form"
          >
            BOOK NOW
          </button>
        </form>
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
