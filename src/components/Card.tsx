import { Link } from 'react-router-dom';

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
    <div>
      <Link to={`city/${cityId}`}>
        <h5>{name}</h5>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt='Not found'
        />
        <section>
          <div>Min {min}</div>
          <div>Max {max}</div>
        </section>
      </Link>
      <button onClick={onClose}> x </button>
    </div>
  );
}
