import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Square Employee Directory</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="warning">
                        Refresh
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
