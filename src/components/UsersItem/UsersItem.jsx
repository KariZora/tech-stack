import "./UsersItem.css";
import { Link, Route } from "react-router-dom";
import UsersBirthday from "../UsersBirthday/UsersBirthday";

const UsersItem = ({ lastName, firstName, dob, month }) => {
  return (
    <>
      <li>
        <Link to="/user-birthday" className="userBirthday">
          {lastName} {firstName}
        </Link>
        <form>
          <input type="radio" /> not active
          <input type="radio" /> active
        </form>
      </li>

      <Route path="/user-birthday">
        <UsersBirthday
          month={month}
          lastName={lastName}
          firstName={firstName}
          dob={dob}
        />
      </Route>
    </>
  );
};

export default UsersItem;
