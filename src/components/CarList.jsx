export const CarList = ({items}) => {
    return <ul>{items.map(item => {
        return <li key={item.id}>
            {/* <img src={item.img} alt="car"></img> */}
            <h2>{item.make}</h2>
            <h2>{item.model}</h2>
            <p>{item.year}</p>
            <p>{item.rentalPrice}</p>
            <p>{item.address}</p>
            <p>{item.rentalCompany}</p>
            <p>{item.type}</p>
            <p>{item.model}</p>
            <p>{item.id}</p>
            <p>{item.functionalities[0]}</p>
        </li>
    })}</ul>
}