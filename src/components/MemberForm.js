import React, { useState } from "react";

const MemberForm = props => {
  console.log("member props", props);
  const [member, setMember] = useState({
    fName: "",
    lName: ""
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
    setMember({ fName: "", lName: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="fName">First Name</label>
      <input
        id="fName"
        type="text"
        name="fName"
        onChange={handleChanges}
        value={member.fName}
      />
      <label htmlFor="lName">Last Name</label>
      <input
        id="lName"
        type="text"
        name="lName"
        onChange={handleChanges}
        value={member.fName}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;