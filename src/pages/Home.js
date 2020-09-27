import React from "react";
import { useSelector , useDispatch} from "react-redux";
import userActions from '../redux/actions';
const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  return (
    <div>
      {username ? (<div>
      <h2 style={{ textAlign: "center" }}>User Profile Card</h2>
      <div className="card">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          alt="John"
          style={{ width: "50%" }}
        />
        <h1> {username}</h1>
        <p className="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <p>
          <button onClick={handleLogout}>Logout</button>
        </p>
      </div>
    </div>) : (<h1 className="center">No user found</h1>)}
    </div>
    );
};

export default Home;
