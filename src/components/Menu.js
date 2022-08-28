import { useState } from 'react'
import HomeButton from './HomeButton'
import menu from '../utils/menu'
import MenuItem from './MenuItem'

export default function Menu(props) {
  const [chapter, setChapter] = useState('')

  return (
    <section className="section section_name_menu flex-column menu">
      <HomeButton {...props} />
      <h2 className="section__title">DELICIOUS MENU</h2>
      <div className="rectangle"></div>
      <p className="section__text section__text-accent">
        We are working to bring the greatest flavor to you every day. Once
        discover our cousine you will never forget it. Enjoy!
      </p>
      <div className="flex-column">
        <nav className="flex-row flex-row_justify-content_center">
          <button
            type="button"
            onClick={() => setChapter('soup')}
            className={`menu__chapter ${
              chapter === 'soup' && 'menu__chapter_active'
            }`}
          >
            SOUP
          </button>
          <button
            type="button"
            onClick={() => setChapter('pizza')}
            className={`menu__chapter ${
              chapter === 'pizza' && 'menu__chapter_active'
            }`}
          >
            PIZZA
          </button>
          <button
            type="button"
            onClick={() => setChapter('pasta')}
            className={`menu__chapter ${
              chapter === 'pasta' && 'menu__chapter_active'
            }`}
          >
            PASTA
          </button>
          <button
            type="button"
            onClick={() => setChapter('dessert')}
            className={`menu__chapter ${
              chapter === 'dessert' && 'menu__chapter_active'
            }`}
          >
            DESSERT
          </button>
          <button
            type="button"
            onClick={() => setChapter('sandwich')}
            className={`menu__chapter ${
              chapter === 'sandwich' && 'menu__chapter_active'
            }`}
          >
            SANDWICHES
          </button>
          <button
            type="button"
            onClick={() => setChapter('beer')}
            className={`menu__chapter ${
              chapter === 'beer' && 'menu__chapter_active'
            }`}
          >
            BEER
          </button>
          <button
            type="button"
            onClick={() => setChapter('drink')}
            className={`menu__chapter ${
              chapter === 'drink' && 'menu__chapter_active'
            }`}
          >
            DRINKS
          </button>
        </nav>
        <div className="menu__main">
          {menu
            .filter((item) => (chapter ? item.type === chapter : item))
            .map((item) => {
              return <MenuItem key={item.id} {...item} />
            })}
        </div>
      </div>
    </section>
  )
}
