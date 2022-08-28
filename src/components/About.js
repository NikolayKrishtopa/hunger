export default function About() {
  return (
    <section className="section section_name_about">
      <div className="flex-column">
        <h2 className="section__title">about us</h2>
        <div className="rectangle"></div>
        <p className="section__text-accent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
          maximus, molestie est a, tempor magna.
        </p>
        <p className="section__text">
          Integer ullamcorper neque eu purus euismod, ac faucibus mauris
          posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper
          feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
          Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis
          semper laoreet.
        </p>
      </div>
      <img src="./images/about-img.png" alt="about" className="image" />
    </section>
  )
}
