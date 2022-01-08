import Searchbar from './Searchbar';
import s from '../css_modules/Nav.module.css';
import { Link } from 'react-router-dom';

interface Search {
  onSearch: (city: string) => void;
}

export default function Nav({ onSearch }: Search): JSX.Element {
  return (
    <div className={`${s.main}`}>
      <Link to='/' className={`${s.link}`}>
        <span>Home</span>
      </Link>
      <div>
        <Searchbar onSearch={onSearch} />
      </div>
      <Link to='/about' className={`${s.link}`}>
        <span>About</span>
      </Link>
    </div>
  );
}
