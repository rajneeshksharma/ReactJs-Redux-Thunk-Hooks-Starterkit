const setUserAction = (userObj) => ({
  type: "SET_USER",
  payload: userObj,
});

const clearUserAction = () => ({
  type: "CLEAR_USER",
});

const newUserToDB = (userObj) => (dispatch) => {
  dispatch(setUserAction(userObj));
  localStorage.setItem("user", JSON.stringify(userObj));
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
};

const deleteUserFromDB = (userId) => (dispatch) => {
  dispatch(clearUserAction());
  localStorage.clear();
};

const loginUserToDB = (userCredentials) => (dispatch) => {
  dispatch(setUserAction(userCredentials));
  localStorage.setItem("user", JSON.stringify(userCredentials));
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
};

const logoutUser = () => (dispatch) => {
  dispatch(clearUserAction());
  localStorage.clear();
};

export default {
  newUserToDB,
  deleteUserFromDB,
  loginUserToDB,
  logoutUser,
};
