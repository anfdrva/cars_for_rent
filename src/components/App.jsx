import { CarList } from "./CarList/CarList";
import { SearchBar } from "./SearchBar/SearchBar";
import carItems from '../car-items.json';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Layout>
      <SearchBar />
      <CarList items={carItems} />
      <GlobalStyle/>
    </Layout>
  );
};
