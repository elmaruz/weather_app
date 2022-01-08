import { useState, ChangeEvent, FormEventHandler } from 'react';

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
          onChange={(e) => setName(e.target.value)}></input>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}
