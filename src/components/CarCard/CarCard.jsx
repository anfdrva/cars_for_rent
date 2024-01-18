// import { Image } from 'cloudinary-react';

import { MainText, Price, Model } from "./CarCard.styled"

export const CarCard = ({ car: { make, model, year, rentalPrice, address, rentalCompany, type, id, functionalities, img } }) => {
    return (
        <div>
            {/* <Image src={img} alt="car"></Image> */}
            <MainText>
                <p>{make}</p>
                <Model>{model},</Model>
                <p>{year}</p>
                <Price>{rentalPrice}</Price>
            </MainText>
            <div>
                <p>{address.split(',')[1].trim()}</p>
                <p>{address.split(',')[2].trim()}</p>
                <p>{rentalCompany}</p>
                <p>{type}</p>
                <p>{model}</p>
                <p>{id}</p>
                {/* <p>{functionalities[0]}</p> */}
            </div>
        </div>
    )
}