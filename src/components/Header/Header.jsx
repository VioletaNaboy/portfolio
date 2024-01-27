import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/education">Educationj</Link>
      </nav>
    </div>
  );
};

