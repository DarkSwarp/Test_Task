import {
  Nav,
  Link,
  Header,
  Container,
  Icon,
  Wrap,
  PhoneLink,
} from './AppBar.styled';
import icon from 'assets/icons/icons.svg';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Wrap>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/favorites">Favorites</Link>
          </Nav>
          <PhoneLink href="tel:+380730000000">
            <Icon>
              <use href={icon + '#icon-phone'}></use>
            </Icon>
            +38 (073) 000 00 00
          </PhoneLink>
        </Wrap>
      </Container>
    </Header>
  );
};
