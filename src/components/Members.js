import React from "react";

const Member = props => {
  return (
    <div className="note-list">
        <h2>Members</h2>
    
    
    <div className="member" key={props.member.id}>
    <p>Name: {props.member.name}<br></br> 
    Email: {props.member.email}<br></br>
    Role: {props.member.role}
    </p>
 </div>
    
    

      {/* {props.member.map(member => (
        <div className="member" key={member.id}>
           <p>Name: {member.name}<br></br> 
           Email: {member.email}<br></br>
           Role: {member.role}
           </p>
        </div>
      ))} */}
    </div>
  );
};

export default Member;