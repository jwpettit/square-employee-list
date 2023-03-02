import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';

export default function Navigation({ getData }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" >Square Employee Directory</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Button
                        variant="warning"
                        onClick={getData}
                    >
                        Refresh
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
