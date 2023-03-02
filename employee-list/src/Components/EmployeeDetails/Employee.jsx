import { useState, useEffect } from "react";
import Empty from "./Empty";
import Detail from "./Detail";

export default function Employee({ employees, employeeID }) {
    const [currentEmployee, setCurrentEmployee] = useState("")

    useEffect(() => {
        if (employeeID) {
            setCurrentEmployee(employees.filter(employee => employee.uuid === employeeID))
        }
    },[employeeID, employees]);

    return (
        <div>
            {employeeID ? (
                <Detail currentEmployee={currentEmployee} />
            ) : (
                <Empty />
            )}
        </div>
    );
}
