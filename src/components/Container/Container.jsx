import "./Container.css";

const Container = ({ children }) => {
  return (
    <>
      <h1>Employees</h1>
      <div className="div">{children}</div>
    </>
  );
};

export default Container;
