import React, { useState } from "react";
import ReactDOM from "react-dom";

import Members from "./components/Members";
import MemberForm from "./components/MemberForm";

import "./index.css";

function App() {
  const [members, setMember] = useState([
    {
     
      fName: "Bob",
      lName: "Evans"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
        fName: members.lName,
        lName: members.nName
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="App">
      <h1>Members</h1>
      {/* we are going to pass a function down as a prop */}
      <MemberForm addNewMember={addNewMember} />
      <Members member={members} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
