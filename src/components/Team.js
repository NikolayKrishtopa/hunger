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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
          maximus, molestie est a, tempor magna.
        </p>
        <p className="section__text section__text_theme_dark">
          Integer ullamcorper neque eu purus euismod, ac faucibus mauris
          posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper
          feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
          Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis
          semper laoreet.
        </p>
      </div>
    </section>
  )
}
