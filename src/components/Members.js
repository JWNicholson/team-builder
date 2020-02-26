import React from "react";

const Member = props => {

    console.log(" props from Members js ", props);
  return (
   
    <div className="note-list">

        <h2>Members</h2>
    
    <div className="member" key={props.members.id}>
    <p>Name: {props.members.name}<br></br> 
    Email: {props.members.email}<br></br>
    Role: {props.members.role}
    </p>
 </div>
    
    </div>
  );
};

export default Member;

    {/* {props.member.map(member => (
        <div className="member" key={member.id}>
           <p>Name: {member.name}<br></br> 
           Email: {member.email}<br></br>
           Role: {member.role}
           </p>
        </div>
      ))} */}