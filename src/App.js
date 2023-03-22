import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "Leul Adugna",
        designation: "React developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Dagem Adugna",
        designation: "PHP developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Lielt Adugna",
        designation: "Fun developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Atse minilik",
        designation: "Freedom developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "Etege taytu",
        designation: "Freedom developer",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Haile selassie",
        designation: "Freedom developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "Bart simpson",
        designation: "Trouble developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Lisa simpson",
        designation: "Wise developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Maggie simpson",
        designation: "Danger developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Nelson mandella",
        designation: "International developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Harriet tubbman",
        designation: "International developer",
        gender: "female",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Mathin luther king",
        designation: "International developer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    console.log(event.target.value);
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }
  return (
    <div>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleTeamSelectionChange={handleTeamSelectionChange}
        handleEmployeeCardClick={handleEmployeeCardClick}
      />
      <Footer />
    </div>
  );
}

export default App;
