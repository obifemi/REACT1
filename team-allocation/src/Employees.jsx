import { useState, useEffect } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";


    // selected team state hook 
  


const Employees = () => {

    const [selectedTeam, setSelectedTeam] = useState("TeamA");



  const [employees, setEmployees] = useState([
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

  function handleTeamSelectionChange(e){
    setSelectedTeam(e.target.value);
    console.log(e.target.value);
}
  return (

    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
            <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange} >
                <option value="TeamA">TeamA</option>
                <option value="TeamB">TeamB</option>
                <option value="TeamC">TeamC</option>
                <option value="TeamD">TeamD</option>
            </select>
            <div className="card-collection">
          {employees.map((employee) => (
            <div key={employee.id} className="card m-2">
              <img src= {employee.gender==='female'?femaleProfile:maleProfile}  alt="" className="card-image-top" style={{cursor: "pointer"}} />
                <div className="card-body">
              <h5>Full Name: {employee.fullName}</h5>
              <p className="card-text"> <b>Designation:</b> {employee.designation} </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
