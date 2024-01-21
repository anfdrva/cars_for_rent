export const SearchBar = ({ items, brand, price, mileageFrom, mileageTo, onChangeBrand, onChangePrice, onChangeMileageFrom, onchangeMileageTo}) => {
    
    const createPriceOptions = () => {
        const options = [];
        for (let carPrice = 30; carPrice <= 300; carPrice += 10) {
            options.push(<option key={carPrice} value={carPrice}>{carPrice}</option>);
        }
        return options;
    };

    return (
        <div>
            <select
                name="car-brand"
                value={brand}
                onChange={evt => {
                    onChangeBrand(evt.target.value)
                }}
            >
                <option value="" default disabled selected>Enter your text</option>
                {items.map(item => (
                    <option value={item.make} key={item.id}>{item.make}</option>
                ))}
            </select>

            <select
                name="price"
                value={price}
                 onChange={evt => {
                    onChangePrice(evt.target.value);
                }}
            >
                <option value="" default disabled selected>To $</option>
                {createPriceOptions()}
            </select>

            <input
                type="text"
                value={mileageFrom}
                placeholder="From"
                onChange={evt => {
                    onChangeMileageFrom(evt.target.value);
                }}
            />

            <input
                type="text"
                value={mileageTo}
                placeholder="To"
                 onChange={evt => {
                    onchangeMileageTo(evt.target.value);
                }}
            />

            <button type="button">Search</button>
        </div>
    );
};