import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function List({ employees, setEmployeeID }) {
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UUID</th>
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
                                    <td>
                                        <Link
                                            onClick={() => {
                                                setEmployeeID(employee.uuid);
                                            }}
                                            to={{ pathname: "/employee/" }}
                                        >
                                            <b>{employee.full_name}</b>
                                        </Link>
                                    </td>
                                    <td>{employee.uuid}</td>
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
