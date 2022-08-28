import events1 from './images/events-1.png'
import events2 from './images/events-2.png'

export default function Events() {
  return (
    <section className="section section_name_private-events">
      <h2 className="section-heading section-heading_place_top">
        PRIVATE EVENTS
      </h2>
      <div className="img-block">
        <div className="img-block__annotation-container">
          <p className="img-block__annotation">weddings</p>
        </div>
        <img src={events1} alt="rings" className="image" />
      </div>
      <div className="img-block">
        <div className="img-block__annotation-container img-block__annotation-container_style_left">
          <p className="img-block__annotation">corporate parties</p>
        </div>
        <img src={events2} alt="wedding" className="image" />
      </div>
    </section>
  )
}
