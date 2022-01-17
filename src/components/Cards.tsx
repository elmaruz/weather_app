import Card from './Card';
import s from '../css_modules/Cards.module.css';

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
  cities: City[];
  onClose: (id: number) => void;
}

export default function Cards({ cities, onClose }: Props): JSX.Element {
  return (
    <div className={`${s.main}`}>
      <img className={`${s.sun_img}`} src='/images/sun.png' alt='' />
      <img className={`${s.cloud_img}`} src='/images/cloud.png' alt='' />
      <img className={`${s.cloud_img_2}`} src='/images/cloud_rev.png' alt='' />
      <div className={`${s.cont}`}>
        {cities.length > 0 ? (
          cities.map((elem) => (
            <Card
              key={elem.id}
              name={elem.name}
              min={elem.min}
              max={elem.max}
              img={elem.weather[0].icon}
              onClose={() => onClose(elem.id)}
              cityId={elem.id}
            />
          ))
        ) : (
          <div className={`${s.main}`}>
            <img className={`${s.sun_img}`} src='/images/sun.png' alt='' />
          </div>
        )}
      </div>
    </div>
  );
}
