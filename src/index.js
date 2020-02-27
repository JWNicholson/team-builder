import React, { useState } from "react";
import ReactDOM from "react-dom"
import Members from "./components/Members";
import MemberForm from "./components/MemberForm";
import "./index.css";

function App() {
   const [members, setMembers] = useState([
     {
       name: "Bob",
       email: "Evans",
       role: "busboy",
     }
   ]);

   const addNewMember = member => {
     const newMember = {
       name: member.name,
       email: member.email,
       role: member.role
     };
     setMembers([...members, newMember]);
   };

   return (
   
     <div className="App">
       <h1>Members List</h1>
       {/* pass a function down as a prop */}
       <MemberForm addNewMember={addNewMember} />
       <h2>Members:</h2>
       <Members members={members} />
     </div>
   );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
