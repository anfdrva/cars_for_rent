import { CarCard } from "../CarCard/CarCard";
import { List, ListItem } from "./CarList.styled";

export const CarList = ({ items }) => {
    return (
        <List>
            {items.map(item => (
                <ListItem key={item.id}>
                    <CarCard car={item} />
                </ListItem>
            ))}
        </List>
    );
};