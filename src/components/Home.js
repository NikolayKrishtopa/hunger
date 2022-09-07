import logo from '../images/logo.svg'

export default function Home(props) {
  const { onChangeMode } = props
  return (
    <div className="home">
      <nav className="flex-row">
        <div className="home__links-container">
          <button
            type="button"
            onClick={() => onChangeMode('home')}
            className="home__link"
          >
            HOME
          </button>
          <button
            type="button"
            onClick={() => onChangeMode('about')}
            className="home__link"
          >
            ABOUT
          </button>
          <button
            type="button"
            onClick={() => onChangeMode('team')}
            className="home__link"
          >
            TEAM
          </button>
          <button
            type="button"
            onClick={() => onChangeMode('booking')}
            className="home__link"
          >
            BOOKING
          </button>
        </div>
        <div className="home__links-container">
          <button
            type="button"
            onClick={() => onChangeMode('menu')}
            className="home__link"
          >
            MENU
          </button>
          <button
            type="button"
            onClick={() => onChangeMode('gallery')}
            className="home__link"
          >
            GALERIE
          </button>
          <button
            type="button"
            onClick={() => onChangeMode('events')}
            className="home__link"
          >
            EVENTS
          </button>
          <button
            type="button"
            onClick={() => onChangeMode('contact')}
            className="home__link"
          >
            CONTACT
          </button>
        </div>
      </nav>
      <img src={logo} alt="logo" className="home__logo" />
      <div className="home__center">
        <p className="section-heading section-heading_style_vertical">
          Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
        </p>
        <div className="flex-column">
          <p className="section-heading">RESTAURANT</p>
          <h1 className="home__title">hungry people</h1>
          <div className="rectangle rectangle_place_home"></div>
          <div className="home__buttons">
            <button
              type="button"
              onClick={() => onChangeMode('booking')}
              className="button button_type_booking"
            >
              BOOK TABLE
            </button>
            <button
              type="button"
              onClick={() => onChangeMode('about')}
              className="button"
            >
              EXPLORE
            </button>
          </div>
        </div>
        <nav className="home__social">
          <a href="" className="home__social-link">
            <svg
              width="12"
              height="21"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.85156 20.9839V12.0386H0.84375V8.48389H3.85156V5.67139C3.85156 4.18701 4.26823 3.04118 5.10156 2.23389C5.9349 1.40055 7.04167 0.983887 8.42188 0.983887C9.54167 0.983887 10.4531 1.03597 11.1562 1.14014V4.3042H9.28125C8.57812 4.3042 8.09635 4.46045 7.83594 4.77295C7.6276 5.03337 7.52344 5.45003 7.52344 6.02295V8.48389H10.8438L10.375 12.0386H7.52344V20.9839H3.85156Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="" className="home__social-link">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9297 4.92139C17.9557 5.02555 17.9688 5.19482 17.9688 5.4292C17.9688 7.3042 17.513 9.1141 16.6016 10.8589C15.6641 12.7078 14.349 14.1792 12.6562 15.2729C10.8073 16.4969 8.6849 17.1089 6.28906 17.1089C3.9974 17.1089 1.90104 16.4969 0 15.2729C0.286458 15.299 0.611979 15.312 0.976562 15.312C2.8776 15.312 4.58333 14.7261 6.09375 13.5542C5.18229 13.5542 4.375 13.2938 3.67188 12.7729C2.99479 12.2261 2.52604 11.549 2.26562 10.7417C2.52604 10.7677 2.77344 10.7808 3.00781 10.7808C3.3724 10.7808 3.73698 10.7417 4.10156 10.6636C3.16406 10.4552 2.38281 9.97347 1.75781 9.21826C1.13281 8.46305 0.820312 7.60368 0.820312 6.64014V6.56201C1.39323 6.90055 2.00521 7.08285 2.65625 7.10889C2.10938 6.71826 1.66667 6.22347 1.32812 5.62451C0.989583 5.02555 0.820312 4.37451 0.820312 3.67139C0.820312 2.94222 1.01562 2.25212 1.40625 1.60107C2.42188 2.87712 3.65885 3.89274 5.11719 4.64795C6.60156 5.40316 8.17708 5.81982 9.84375 5.89795C9.79167 5.58545 9.76562 5.27295 9.76562 4.96045C9.76562 4.23128 9.94792 3.5542 10.3125 2.9292C10.6771 2.27816 11.1719 1.77035 11.7969 1.40576C12.4219 1.04118 13.099 0.858887 13.8281 0.858887C14.4271 0.858887 14.974 0.976074 15.4688 1.21045C15.9896 1.44482 16.4453 1.75732 16.8359 2.14795C17.7734 1.96566 18.6458 1.64014 19.4531 1.17139C19.1406 2.13493 18.5417 2.89014 17.6562 3.43701C18.4375 3.33285 19.2188 3.11149 20 2.77295C19.4271 3.60628 18.737 4.32243 17.9297 4.92139Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="" className="home__social-link">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4.4917C8.19271 4.4917 7.4375 4.70003 6.73438 5.1167C6.05729 5.50732 5.51042 6.0542 5.09375 6.75732C4.70312 7.43441 4.50781 8.1766 4.50781 8.98389C4.50781 9.79118 4.70312 10.5464 5.09375 11.2495C5.51042 11.9266 6.05729 12.4735 6.73438 12.8901C7.4375 13.2808 8.19271 13.4761 9 13.4761C9.80729 13.4761 10.5495 13.2808 11.2266 12.8901C11.9297 12.4735 12.4766 11.9266 12.8672 11.2495C13.2839 10.5464 13.4922 9.79118 13.4922 8.98389C13.4922 8.1766 13.2839 7.43441 12.8672 6.75732C12.4766 6.0542 11.9297 5.50732 11.2266 5.1167C10.5495 4.70003 9.80729 4.4917 9 4.4917ZM9 11.9136C8.19271 11.9136 7.5026 11.6271 6.92969 11.0542C6.35677 10.4813 6.07031 9.79118 6.07031 8.98389C6.07031 8.1766 6.35677 7.48649 6.92969 6.91357C7.5026 6.34066 8.19271 6.0542 9 6.0542C9.80729 6.0542 10.4974 6.34066 11.0703 6.91357C11.6432 7.48649 11.9297 8.1766 11.9297 8.98389C11.9297 9.79118 11.6432 10.4813 11.0703 11.0542C10.4974 11.6271 9.80729 11.9136 9 11.9136ZM14.7422 4.29639C14.7161 4.58285 14.599 4.83024 14.3906 5.03857C14.2083 5.24691 13.974 5.35107 13.6875 5.35107C13.401 5.35107 13.1536 5.24691 12.9453 5.03857C12.737 4.83024 12.6328 4.58285 12.6328 4.29639C12.6328 4.00993 12.737 3.76253 12.9453 3.5542C13.1536 3.34587 13.401 3.2417 13.6875 3.2417C13.974 3.2417 14.2214 3.34587 14.4297 3.5542C14.638 3.76253 14.7422 4.00993 14.7422 4.29639ZM17.7109 5.35107C17.6589 4.59587 17.5417 3.94482 17.3594 3.39795C17.125 2.74691 16.7604 2.18701 16.2656 1.71826C15.7969 1.22347 15.237 0.858887 14.5859 0.624512C14.0391 0.44222 13.388 0.338053 12.6328 0.312012C11.9036 0.259928 10.6927 0.233887 9 0.233887C7.30729 0.233887 6.08333 0.259928 5.32812 0.312012C4.59896 0.338053 3.96094 0.44222 3.41406 0.624512C2.76302 0.858887 2.1901 1.22347 1.69531 1.71826C1.22656 2.18701 0.875 2.74691 0.640625 3.39795C0.458333 3.94482 0.341146 4.59587 0.289062 5.35107C0.263021 6.08024 0.25 7.29118 0.25 8.98389C0.25 10.6766 0.263021 11.9006 0.289062 12.6558C0.341146 13.3849 0.458333 14.0229 0.640625 14.5698C0.875 15.2209 1.22656 15.7938 1.69531 16.2886C2.1901 16.7573 2.76302 17.0959 3.41406 17.3042C3.96094 17.5125 4.59896 17.6297 5.32812 17.6558C6.08333 17.7078 7.30729 17.7339 9 17.7339C10.6927 17.7339 11.9036 17.7078 12.6328 17.6558C13.388 17.6297 14.0391 17.5256 14.5859 17.3433C15.237 17.1089 15.7969 16.7573 16.2656 16.2886C16.7604 15.7938 17.125 15.2209 17.3594 14.5698C17.5417 14.0229 17.6458 13.3849 17.6719 12.6558C17.724 11.9006 17.75 10.6766 17.75 8.98389C17.75 7.29118 17.737 6.08024 17.7109 5.35107ZM15.8359 14.1401C15.5234 14.9214 14.9635 15.4813 14.1562 15.8198C13.7396 15.9761 13.0365 16.0802 12.0469 16.1323C11.5 16.1584 10.6927 16.1714 9.625 16.1714H8.375C7.33333 16.1714 6.52604 16.1584 5.95312 16.1323C4.98958 16.0802 4.28646 15.9761 3.84375 15.8198C3.0625 15.5073 2.5026 14.9474 2.16406 14.1401C2.00781 13.6974 1.90365 12.9943 1.85156 12.0308C1.82552 11.4578 1.8125 10.6506 1.8125 9.60889V8.35889C1.8125 7.31722 1.82552 6.50993 1.85156 5.93701C1.90365 4.94743 2.00781 4.2443 2.16406 3.82764C2.47656 3.02035 3.03646 2.46045 3.84375 2.14795C4.28646 1.9917 4.98958 1.88753 5.95312 1.83545C6.52604 1.80941 7.33333 1.79639 8.375 1.79639H9.625C10.6667 1.79639 11.474 1.80941 12.0469 1.83545C13.0365 1.88753 13.7396 1.9917 14.1562 2.14795C14.9635 2.46045 15.5234 3.02035 15.8359 3.82764C15.9922 4.2443 16.0964 4.94743 16.1484 5.93701C16.1745 6.48389 16.1875 7.29118 16.1875 8.35889V9.60889C16.1875 10.6506 16.1745 11.4578 16.1484 12.0308C16.0964 12.9943 15.9922 13.6974 15.8359 14.1401Z"
                fill="white"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  )
}
