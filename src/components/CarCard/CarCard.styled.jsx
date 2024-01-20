import styled from "styled-components";

export const Wrapper = styled.div`
    /* border: 1px solid black; */
`

export const CarPhoto = styled.img`
    width: 274px;
    height: 268px;
    border-radius: 14px;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;
margin-bottom: 14px;
`

export const MainText = styled.div`
    position: relative;
    display: flex;
    gap:3px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 8px;
`;

export const Price = styled.p`
    position: absolute;
    right: 0;
`;

export const Model = styled.p`
    color: ${props => props.theme.colors.lightblue};
`;

export const DetailInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 12px;
    margin-bottom: 28px;
`;

export const DetailInfoText = styled.p`
    color: rgba(18, 20, 23, 0.50);
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin: 0;
`;

export const ButtonLearnMore = styled.button`
    color: ${props => props.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    display: flex;
    width: 274px;
    height: 44px;
    padding: 12px 99px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: ${props => props.theme.colors.lightblue};
    border: 0;
    cursor: pointer;

    &:hover,
    &:active{
        background-color: ${props => props.theme.colors.deepblue}
    }

`;