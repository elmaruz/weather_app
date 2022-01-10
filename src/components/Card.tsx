import { Link } from 'react-router-dom';
import s from '../css_modules/Card.module.css';

interface CityProps {
  name: string;
  min: number;
  max: number;
  img: string;
  cityId: number;
  onClose: () => void;
}

export default function Card({
  name,
  min,
  max,
  img,
  cityId,
  onClose,
}: CityProps): JSX.Element {
  return (
    <div className={`${s.cont}`}>
      <Link to={`city/${cityId}`} className={`${s.link}`}>
        <div className={`${s.main}`}>
          <div className={`${s.upper}`}>
            <h3>{name}</h3>
            <img
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              alt='Not found'
              className={`${s.card_img}`}
            />
          </div>

          <div className={`${s.temp_box}`}>
            <div className={`${s.min}`}>Min {min}°C</div>
            <div className={`${s.max}`}>Max {max}°C</div>
          </div>
        </div>
      </Link>
      <button onClick={onClose} className={`${s.btn}`}>
        <div className={`${s.x}`}>x</div>
      </button>
    </div>
  );
}
