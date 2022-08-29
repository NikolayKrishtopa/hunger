import chef from '../images/chef.png'
import HomeButton from './HomeButton'

export default function Team(props) {
  return (
    <section className="section section_name_team">
      <HomeButton {...props} />
      <h2 className="section-heading section-heading_place_top">OUR TEAM</h2>
      <img src={chef} alt="chef" className="image" />
      <div className="flex-column">
        <h3 className="section__title section__title_theme_dark">
          MASTER CHEF
        </h3>
        <div className="rectangle"></div>
        <p className="section__text-accent section__text-accent_theme_dark">
          We are glad and proud to introduce our chef Lucie Prettier
        </p>
        <p className="section__text section__text_theme_dark">
          Lucie is great and talented chef who is experienced in european and
          Mediterranean cousine. She have served for years at the best
          restaraunts of Europe and USA before she came to London
        </p>
      </div>
    </section>
  )
}
