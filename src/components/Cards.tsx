import Card from './Card';

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
    <div>
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
        <div></div>
      )}
    </div>
  );
}
