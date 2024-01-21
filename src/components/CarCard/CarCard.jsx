import { MainText, Price, Model, Wrapper, CarPhoto, DetailInfo, DetailInfoText, ButtonLearnMore } from "./CarCard.styled"

export const CarCard = ({ car: { make, model, year, rentalPrice, address, rentalCompany, type, id, functionalities, img }, onLearnMore }) => {
    return (
        <Wrapper>
            <CarPhoto src={img} alt="car" />
            {/* <Image src={img} alt="car"></Image> */}
            <MainText>
                <p>{make}</p>
                <Model>{model},</Model>
                <p>{year}</p>
                <Price>{rentalPrice}</Price>
            </MainText>
            <DetailInfo>
                <DetailInfoText>{address.split(',')[1].trim()}</DetailInfoText>
                <DetailInfoText>{address.split(',')[2].trim()}</DetailInfoText>
                <DetailInfoText>{rentalCompany}</DetailInfoText>
                <DetailInfoText>{type}</DetailInfoText>
                <DetailInfoText>{model}</DetailInfoText>
                <DetailInfoText>{id}</DetailInfoText>
                {/* <p>{functionalities[0]}</p> */}
            </DetailInfo>
            <ButtonLearnMore type="button" onClick={()=>onLearnMore(id)}>Learn More</ButtonLearnMore>
        </Wrapper>
    )
}