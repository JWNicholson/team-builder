import React from "react";

const Member = props => {
  return (
    <div className="note-list">
        <h2>Members</h2>
      {props.member.map(member => (
        <div className="member" key={member.id}>
           <p>First Name: {member.fName}<br></br> Last Name: {member.lName}</p>
          <h2></h2>
          <h2></h2>
        </div>
      ))}
    </div>
  );
};

export default Member;