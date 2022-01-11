import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Cards from '../components/Cards';
import About from '../components/About';
import Nav from '../components/Nav';
import Detail from '../components/Detail';

function App(): JSX.Element {
  const APIKEY = process.env.REACT_APP_APIKEY;

  console.log(APIKEY);

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

  let [cities, setCities] = useState<City[]>([]);

  function onSearch(city: string): void {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data !== undefined) {
          let inputCity: City = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather,
            clouds: data.clouds.all,
            latitude: data.coord.lat,
            longitude: data.coord.lon,
          };
          setCities((oldCities: City[]) => [...oldCities, inputCity]);
          console.log(cities);
        }
      })
      .catch((err) => alert('Please enter a valid location'));
  }

  function onClose(id: number): void {
    let close = setCities((oldCities) =>
      oldCities.filter((elem) => elem.id !== id)
    );
    return close;
  }

  function onDesc(id: string | undefined): City | undefined {
    if (id) {
      let city: City | undefined = cities.find(
        (elem) => elem.id === parseInt(id)
      );
      return city;
    } else {
      return undefined;
    }
  }

  return (
    <BrowserRouter>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/' element={<Cards cities={cities} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/city/:cityId' element={<Detail onDesc={onDesc} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
