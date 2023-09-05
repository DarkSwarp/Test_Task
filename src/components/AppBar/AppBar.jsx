import { Nav, Link, Header, Container } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </Nav>
      </Container>
    </Header>
  );
};
