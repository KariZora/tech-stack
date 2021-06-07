import "./UsersItem.css";

const UsersItem = ({ lastName, firstName }) => {
  return (
    <>
      <li>
        <p className="user">
          {lastName} {firstName}
        </p>
        <form>
          <input type="radio" /> not active
          <input type="radio" /> active
        </form>
      </li>
    </>
  );
};

export default UsersItem;
