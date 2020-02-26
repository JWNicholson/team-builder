import React, { useState } from "react";
import ReactDOM from "react-dom";

import Members from "./components/Members";
import MemberForm from "./components/MemberForm";

import "./index.css";

function App() {
  const [members, setMembers] = useState([
    {
     
      name: "Bob",
      email: "bob@Evans.com",
      role: "HMFWIC"
    }
  ]);

  const addNewMember = members => {
    const newMember = {
        name: members.name,
        email: members.email,
        role: members.role
    };
    setMembers([...members, newMember]);
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
