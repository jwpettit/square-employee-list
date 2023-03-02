import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export default function List({ employees }) {
    return (
        <Container>
        <Table>
            <thead>
                <tr>
                    <th>UUID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Team</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {employees &&
                    employees.map((employee) => {
                        return (
                            <tr key={employee.uuid}>
                                <td>{employee.uuid}</td>
                                <td>{employee.full_name}</td>
                                <td>{employee.email_address}</td>
                                <td>{employee.team}</td>
                                <td>{employee.employee_type}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
        </Container>
    );
}
