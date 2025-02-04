import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function NavigationBar() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    Noticias - Iyan Sanchez da Costa
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};
