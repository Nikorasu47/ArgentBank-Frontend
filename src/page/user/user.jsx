import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../composant/wrapper/wrapper";
import "./user.css";
import { fetchUserInfo, updateUserName } from "../../redux/userslice";

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfo());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (user) {
      setUserName(user.userName);
    }
  }, [user]);

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateUserName(userName));
  };

  const handleCancel = () => {
    if (user) setUserName(user.userName);
  };

  if (!token) {
    return null;
  }

   return (
  <main className="main">
    <section className="edit-user-section">
      <h2 className="edit-user-title">Edit user info</h2>
      <form className="edit-user-form" onSubmit={handleSave}>
        <div className="edit-user-field">
          <label htmlFor="userName">User name:</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="edit-user-input"
          />
        </div>
        <div className="edit-user-field">
          <label htmlFor="firstName">First name:</label>
          <input
            id="firstName"
            type="text"
            value={user?.firstName || ""}
            disabled
            className="edit-user-input disabled"
          />
        </div>
        <div className="edit-user-field">
          <label htmlFor="lastName">Last name:</label>
          <input
            id="lastName"
            type="text"
            value={user?.lastName || ""}
            disabled
            className="edit-user-input disabled"
          />
        </div>
        <div className="edit-user-buttons">
          <button
            type="submit"
            className="user-action-button primary"
            disabled={loading}
          >
            Save
          </button>
          <button
            type="button"
            className="user-action-button primary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
      {error && <p className="edit-user-error">{error}</p>}
    </section>

    {/* Wrappers en dessous */}
    <Wrapper
      id={1}
      title={`Argent Bank Checking (${user?.userName || ""})`}
      amount={"$48,098.43"}
      description={`Available balance`}
    />
    <Wrapper
      id={2}
      title={`Argent Bank Checking (${user?.userName || ""})`}
      amount={"$48,098.43"}
      description={`Available balance`}
    />
    <Wrapper
      id={3}
      title={`Argent Bank Checking (${user?.userName || ""})`}
      amount={"$48,098.43"}
      description={`Available balance`}
    />
  </main>
);
}

export default User;
