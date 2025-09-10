import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPencil } from "@fortawesome/free-solid-svg-icons";
import "./TransactionRow.css";

function TransactionRow({ transaction }) {
  const [expanded, setExpanded] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [editNote, setEditNote] = useState(false);
  const [category, setCategory] = useState(transaction.category);
  const [note, setNote] = useState(transaction.note);

  return (
    <div className={`transaction-row${expanded ? " expanded" : ""}`}>
      <div
        className="transaction-row-main"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span>{transaction.date}</span>
        <span>{transaction.description}</span>
        <span>{transaction.amount}</span>
        <span>{transaction.balance}</span>
        <span className="transaction-row-toggle">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      {expanded && (
        <div className="transaction-row-details">
          <div>
            <strong>Transaction type:</strong> {transaction.type}
          </div>
          <div>
            <strong>Category:</strong>{" "}
            {editCategory ? (
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                onBlur={() => setEditCategory(false)}
                className="transaction-edit-select"
              >
                <option value="Food">Food</option>
                <option value="Groceries">Groceries</option>
                <option value="Transport">Transport</option>
              </select>
            ) : (
              <>
                <span className="transaction-edit-value">{category}</span>
                <span
                  className="transaction-edit-icon"
                  onClick={() => setEditCategory(true)}
                  tabIndex={0}
                  role="button"
                  aria-label="Edit category"
                >
                  <FontAwesomeIcon icon={faPencil} />
                </span>
              </>
            )}
          </div>
          <div>
            <strong>Note:</strong>{" "}
            {editNote ? (
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onBlur={() => setEditNote(false)}
                className="transaction-edit-input"
              />
            ) : (
              <>
                <span className="transaction-edit-value">{note}</span>
                <span
                  className="transaction-edit-icon"
                  onClick={() => setEditNote(true)}
                  tabIndex={0}
                  role="button"
                  aria-label="Edit note"
                >
                  <FontAwesomeIcon icon={faPencil} />
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TransactionRow;