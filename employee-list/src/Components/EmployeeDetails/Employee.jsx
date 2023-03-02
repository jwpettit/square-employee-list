import Empty from "./Empty";
import Detail from "./Detail";

export default function Employee({ employees, employeeID }) {
    return (
        <div>
            {employeeID ? (
                <Detail employees={employees} employeeID={employeeID} />
            ) : (
                <Empty />
            )}
        </div>
    );
}
