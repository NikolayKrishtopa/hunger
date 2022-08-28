export default function Contact() {
  return (
    <section className="section section_name_contact">
      <div className="flex-column">
        <h2 className="section__title">contact</h2>
        <div className="rectangle"></div>
        <p className="section__text section__text_place_contact section__text-accent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
          maximus, molestie est a, tempor magna.
        </p>
        <form action="post" className="booking-form booking-form_place_contact">
          <input
            type="text"
            id="contact-name"
            name="contact-name"
            className="booking-form__field booking-form__field_place_contact-name"
            placeholder="Name"
          />
          <input
            type="email"
            id="contact-email"
            name="contact-email"
            className="booking-form__field booking-form__field_place_contact-email"
            placeholder="Email"
          />
          <input
            type="number"
            id="contact-phone"
            name="contact-phone"
            className="booking-form__field booking-form__field_place_contact-phone"
            placeholder="Phone"
          />
          <input
            type="textarea"
            id="contact-date"
            className="booking-form__field booking-form__field_type_textarea"
            placeholder="Message"
          />
          <p className="section__footer section__footer_place_contact">
             5th London Boulevard, U.K.  +40 729 131 637/+40 726 458 782 
            office@mindblister.com
          </p>
          <button
            type="submit"
            className="button button_active button_place_contact"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}
