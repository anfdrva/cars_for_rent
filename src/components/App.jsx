import { CarList } from "./CarList/CarList";
import { SearchBar } from "./SearchBar/SearchBar";
import initialCarItems from '../car-items.json';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Component } from "react";

export class App extends Component {
  state = {
    carItems: initialCarItems,
    brandFilter: '',
    priceFilter: '',
    mileageFromFilter: '',
    mileageToFilter: ''
  };

  getMoreInfo = carId => {
    console.log(carId);
  };

  changeBrandFilter = newBrand => {
    console.log(newBrand);
  };

  changePriceFilter = newPrice => {
    console.log(newPrice);
  };

  changeMileageFromFilter = newMileageFrom => {
    console.log(newMileageFrom);
  };

  changeMileageToFilter = newMileageTo => {
    console.log(newMileageTo);
  };

  render() {
    return (
      <Layout>
        <SearchBar
          items={this.state.carItems}
          brand={this.state.brandFilter}
          price={this.state.priceFilter}
          mileageFrom={this.state.mileageFromFilter}
          mileageTo={this.state.mileageToFilter}
          onChangeBrand={this.changeBrandFilter}
          onChangePrice={this.changePriceFilter}
          onChangeMileageFrom={this.changeMileageFromFilter}
          onchangeMileageTo={this.changeMileageToFilter}
        />
        <CarList
          items={this.state.carItems}
          onLearnMore={this.getMoreInfo}
        />
        <GlobalStyle />
      </Layout>
    );
  };
};




// export const App = () => {
//   return (
//     <Layout>
//       <SearchBar />
//       <CarList items={carItems} />
//       <GlobalStyle/>
//     </Layout>
//   );
// };
