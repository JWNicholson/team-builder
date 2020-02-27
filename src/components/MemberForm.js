import React, { useState } from "react";

const MemberForm = props => {
  console.log("member props", props);
  const [member, setMember] = useState({
    
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    console.log(member);
    
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "" ,role:""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">First Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">Email</label>
       <input
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={member.role}
      />
      
     
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;