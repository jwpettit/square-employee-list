import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image'

export default function Detail({ currentEmployee }) {
    return (
        <>
            <Container>
                {currentEmployee &&
                    currentEmployee.map((employee) => {
                        return (
                            <div>
                                <Card>
                                    <Card.Body>
                                    <Image rounded
                                        variant="top"
                                        src={employee.photo_url_large}
                                        width={400}
                                    />
                                    <br/>
                                    <h2>{employee.full_name}</h2>
                                    <h5>{employee.biography}</h5>
                                    <br/>
                                    <br/>
                                    <p><b>Email:</b> {employee.email_address}</p>
                                    <p><b>Tel:</b> {employee.phone_number}</p>
                                    <p><b>UUID:</b> {employee.uuid}</p>
                                    <p><b>Employee Type:</b> {employee.employee_type}</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })}
            </Container>
        </>
    );
}
