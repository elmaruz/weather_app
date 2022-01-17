import s from '../css_modules/About.module.css';

export default function About() {
  return (
    <div className={`${s.main}`}>
      <div className={`${s.box}`}>
        <h1>About</h1>
        <div className={`${s.par}`}>
          <p>A cute little weather app built using TypeScript and React.</p>
          <div className={`${s.icons}`}>
            <img src='/images/ts.png' alt='' className={`${s.icon}`} />
            <img
              src='/images/23529-2-weather-hd.png'
              alt=''
              className={`${s.icon}`}
            />
            <img src='/images/react.png' alt='' className={`${s.icon}`} />
          </div>
          <p>
            Type in a city's name and a card will appear, displaying the current
            temperatures and climate.
          </p>
          <p>
            Click on it to view further details, such as wind speed and
            coordinates.
          </p>
          <div>
            <div>
              <p>
                Weather data hosted by{' '}
                <a href='http://api.openweathermap.org' className={s.openw}>
                  OpenWeatherMap
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={`${s.sep_foot}`}>
          <a href='https://github.com/elmaruz'>
            <img className={`${s.icon_foot}`} src='/images/github.png' alt='' />
          </a>
          <a href='http://www.linkedin.com/in/leonardo-marussig-dev'>
            <img
              className={`${s.icon_foot}`}
              src='/images/linkedin.png'
              alt=''
            />
          </a>
        </div>
      </div>
    </div>
  );
}
