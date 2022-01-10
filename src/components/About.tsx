import s from '../css_modules/About.module.css';

export default function About() {
  return (
    <div className={`${s.main}`}>
      <div className={`${s.box}`}>
        <h1>About</h1>
        <p className={`${s.par}`}>
          A cute little weather app built using TypeScript and React.
          <div className={`${s.icons}`}>
            <img src='/images/ts.png' alt='not found' className={`${s.icon}`} />
            <img
              src='/images/23529-2-weather-hd.png'
              alt='not found'
              className={`${s.icon}`}
            />
            <img
              src='/images/react.png'
              alt='not found'
              className={`${s.icon}`}
            />
          </div>
          Type in a city's name and a card will appear, displaying the current
          temperatures and climate.
          <div className={`${s.sep}`}>
            Click on it to view further details, such as wind speed and
            coordinates.
          </div>
          <div>
            Weather data hosted by
            <a href='http://api.openweathermap.org'>
              <img
                className={`${s.openw}`}
                src='/images/openweather.png'
                alt='not found'
              />
            </a>
          </div>
          <div className={`${s.sep_foot}`}>
            <a href='https://github.com/elmaruz'>
              <img
                className={`${s.icon_foot}`}
                src='/images/github.png'
                alt='not found'
              />
            </a>
            <a href='http://www.linkedin.com/in/leonardo-marussig-dev'>
              <img
                className={`${s.icon_foot}`}
                src='/images/linkedin.png'
                alt='not found'
              />
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}
