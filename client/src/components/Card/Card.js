import { FaRegHeart } from 'react-icons/fa';
import { Container, Item, Wish } from './styles';

export default function Card(props) {
  return (
    <Container>
      <Item>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <span>{'R$ ' + props.price}</span>
      </Item>
      <Wish>
        <FaRegHeart />
      </Wish>
    </Container>
  )
}