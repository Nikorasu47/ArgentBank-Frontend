import "./Wrapper.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Wrapper({ id, title, amount, description, rightElement }) {
  const navigate = useNavigate();

  return (
    <section
      className="account"
      onClick={id ? () => navigate(`/account/${id}`) : undefined}
      style={{ cursor: id ? "pointer" : "default" }}
    >
      <div className="account-content">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-arrow">
        {rightElement ? rightElement : <FontAwesomeIcon icon={faChevronRight} />}
      </div>
    </section>
  );
}

export default Wrapper;