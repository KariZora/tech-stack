const UsersBirthday = ({ month, lastName, firstName, dob }) => {
  return (
    <div style={{ borderBottom: "1px solid grey", marginBottom: "12px" }}>
      <h2>Employees birthday</h2>
      <b>{month}</b>
      <p>
        {lastName} {firstName} - {dob.slice(0, 10)}
      </p>
    </div>
  );
};

export default UsersBirthday;
