import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
