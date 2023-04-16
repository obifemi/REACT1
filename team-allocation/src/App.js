import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import { useState, useEffect } from 'react';


function App() {
      const [selectedTeam, setTeam] = useState( JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");



  const [employees, setEmployees] = useState( JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees])

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam])


  function handleTeamSelectionChange(e) {
    console.log("handleTeamSelectionChange called");
    setTeam(e.target.value);
  }


  function handleEmployeeCardClick(event) {
    console.log("handleEmployeeCardClick called");
  
  
    const clickedEmployeeId = parseInt(event.currentTarget.id);
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === clickedEmployeeId) {
        if (employee.teamName === selectedTeam) {
          return { ...employee, teamName: "" };
        } else {
          return { ...employee, teamName: selectedTeam };
        }
      } else {
        return employee;
      }
    });
  
    console.log("updatedEmployees:", updatedEmployees);
    setEmployees(updatedEmployees);
  }
  return (
    <div className="App">
      <Header selectedTeam = {selectedTeam}
        teamMemberCount = {employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Employees employees = {employees}
      handleEmployeeCardClick = {handleEmployeeCardClick}
      handleTeamSelectionChange = {handleTeamSelectionChange}
      selectedTeam = {selectedTeam}
        
      />
      <Footer />
    </div>
  );
}

export default App;
