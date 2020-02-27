import React from "react";

const Member = props => {

    console.log(" props from Members js ", props);
   
  return (
    
    <div className="member-list">
        {props.members.map(member => (
            <div className="member key" key={props.members.id}>
                <p>Name: {member.name}<br></br>
                    Email: {member.email}<br></br>
                    Role: {member.role}
                </p>
            </div>
        ))}
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