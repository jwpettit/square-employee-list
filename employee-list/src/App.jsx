import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import List from "./Components/List";
import Employee from "./Components/EmployeeDetails/Employee";

export default function App() {
    const [employees, setEmployees] = useState([]);
    const [loadedEmployees, setLoadedEmployees] = useState(false);
    const [employeeID, setEmployeeID] = useState("");

    const getData = async () => {
        let url = "https://s3.amazonaws.com/sq-mobile-interview/employees.json";
        const response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            setEmployees(data.employees);
        } else {
            console.error("Error searching for employees |", response);
        }
        setLoadedEmployees(true);
    };

    useEffect(() => {
        if (loadedEmployees === false) {
            getData();
        }
    }, [employees, loadedEmployees]);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout getData={getData} />}>
                    <Route
                        index
                        element={
                            <List
                                employees={employees}
                                setEmployeeID={setEmployeeID}
                            />
                        }
                    />
                    <Route
                        path="employee/"
                        element={
                            <Employee
                                employees={employees}
                                employeeID={employeeID}
                            />
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}
