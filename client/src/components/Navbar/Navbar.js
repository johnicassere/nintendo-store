import {Container, Logo, Links, List, ListItem} from './styles';
import {FaRegQuestionCircle, FaHeart, FaRegUser, FaUserPlus, FaGamepad} from "react-icons/fa";

export default function Navbar() {
  return(
    <Container>
      <Logo>
        Nintendo
      </Logo>
      <Links>
        <List>
          <ListItem>
            <a href=''>
              <FaRegQuestionCircle />
              <span>Suporte</span>
            </a>
          </ListItem>
          <ListItem>
            <a href=''>
              <FaHeart />
              <span>Lista de Desejos</span>
            </a>
          </ListItem>
          <ListItem>
            <a href=''>
              <FaRegUser />
              <span>Login</span>
            </a>
          </ListItem>
          <ListItem>
            <a href=''>
              <FaUserPlus />
              <span>Criar conta</span>
            </a>
          </ListItem>
          <ListItem>
            <a href=''>
              <FaGamepad />
              <span>Perfil</span>
            </a>
          </ListItem>
        </List>
      </Links>
    </Container>
  )
}