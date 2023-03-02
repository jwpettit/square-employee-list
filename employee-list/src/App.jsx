import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout'
import List from './Components/List';

export default function App() {
  const [employees, setEmployees] = useState([])
  const [loadedEmployees, setLoadedEmployees] = useState(false)

  useEffect(() => {
    const getData = async () => {
      let url = "https://s3.amazonaws.com/sq-mobile-interview/employees.json";
      const response = await fetch(url);

      if (response.ok) {
        let data = await response.json();
        setEmployees(data.employees);
      } else {
        console.error('Error searching for employees |', response)
      }
      setLoadedEmployees(true);
    }

    if (loadedEmployees === false) {
      getData();
    }
  }, [employees, loadedEmployees]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List employees={employees} />} />
          {/* <Route path="employee/" /> */}
        </Route>
      </Routes>
    </div>
  );
}
