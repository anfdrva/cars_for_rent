export const SearchBar = () => {
    return (
        <div>
            <select name="car-brand" autoFocus>
                <option disabled="disabled" selected="selected">Enter the text</option>
            </select>
            <select name="price" autoFocus>
                <option disabled="disabled" selected="selected">To $</option>
            </select>
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <button type="button">Search</button>
        </div>
    );
};