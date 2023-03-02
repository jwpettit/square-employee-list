import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Square Employee Directory</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
