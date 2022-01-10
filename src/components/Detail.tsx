import { useParams } from 'react-router-dom';
import s from '../css_modules/Detail.module.css';

interface City {
  min: number;
  max: number;
  img: string;
  id: number;
  wind: number;
  temp: number;
  name: string;
  weather: any[];
  clouds: number;
  latitude: number;
  longitude: number;
}
interface Props {
  onDesc: (id: string | undefined) => City | undefined;
}

export default function Detail({ onDesc }: Props): JSX.Element {
  let { cityId } = useParams();
  let city = onDesc(cityId);
  return (
    <div className={`${s.main}`}>
      {city ? (
        <div className={`${s.box}`}>
          <img
            src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
            alt='Not found'
            className={`${s.card_img}`}
          />
          <h2>{city.name}</h2>
          <div>Max: {city.max}°C</div>
          <div>Min: {city.min}°C</div>
          <div>Wind: {city.wind} km/h</div>
          <div>
            Coordinates: {city.longitude}° / {city.latitude}°
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
