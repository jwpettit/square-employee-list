export default function Detail({ currentEmployee }) {
    return (
        <>
            {currentEmployee &&
                currentEmployee.map((employee) => {
                    return (
                        <div>
                            <p>{employee.uuid}</p>
                            <p>{employee.full_name}</p>
                            <p>{employee.phone_number}</p>
                            <p>{employee.email_address}</p>
                            <p>{employee.biography}</p>
                            <p>{employee.photo_url_small}</p>
                            <p>{employee.team}</p>
                            <p>{employee.employee_type}</p>
                        </div>
                    );
                })}
        </>
    );
}
