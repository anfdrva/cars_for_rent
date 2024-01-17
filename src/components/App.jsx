import { CarList } from "./CarList";
import { SearchBar } from "./SearchBar";
import carItems from '../car-items.json';

export const App = () => {
  return (
    <div>
      <SearchBar />
      <CarList items={carItems} />
    </div>
  );
};
