import { CarList } from "./CarList/CarList";
import { SearchBar } from "./SearchBar/SearchBar";
import carItems from '../car-items.json';

export const App = () => {
  return (
    <div>
      <SearchBar />
      <CarList items={carItems} />
    </div>
  );
};
