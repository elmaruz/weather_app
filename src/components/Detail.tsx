import { useParams } from 'react-router-dom';

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
    <div>
      {city ? (
        <div>
          <h2>{city.name}</h2>
          <div>Max: {city.max}°C</div>
          <div>Min: {city.min}°C</div>
          <div>Wind: {city.wind} km/h</div>
          <div>
            Coordinates {city.latitude}° - {city.longitude}°
          </div>
          <div>{city.min}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
