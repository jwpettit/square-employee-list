import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function List({ employees, setEmployeeID}) {
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
                                    <td>
                                        <Link
                                            onClick={() => {
                                                setEmployeeID(employee.uuid);
                                            }}
                                            to={{ pathname: "/employee/" }}
                                        >
                                            {employee.full_name}
                                        </Link>
                                    </td>
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
