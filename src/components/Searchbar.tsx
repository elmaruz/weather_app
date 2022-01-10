import { useState } from 'react';
import s from '../css_modules/Searchbar.module.css';

interface Search {
  onSearch: (city: string) => void;
}

export default function Searchbar({ onSearch }: Search): JSX.Element {
  let [name, setName] = useState<string>('');

  //   const onSubmit = (e: FormEventHandler<HTMLInputElement>) => {
  //     e.preventDefault();
  //     onSearch(name);
  //   };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(name);
          setName('');
        }}>
        <input
          type='text'
          name='search'
          placeholder='City...'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${s.searchbar}`}
        />
        <button type='submit' className={`${s.btn}`}>
          Search
        </button>
      </form>
    </div>
  );
}
