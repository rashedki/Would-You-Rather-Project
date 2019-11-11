import {getInitialData} from "../utils/api"
//enable the following in order to activate the auto login for specific user
//import { setAuthedUser } from "./authedUser";
import {loadUsers} from "./users"
import {loadQuestions} from "./questions"
import {showLoading, hideLoading} from "react-redux-loading-bar"

export const handleInitialData = () => dispatch => {
  dispatch(showLoading());
  return getInitialData().then(({ users, questions }) => {
    dispatch(loadUsers(users));
    dispatch(loadQuestions(questions));
    dispatch(hideLoading());
    // auto-login for debugging
    //enable the following in order to activate the auto login for specific user
   //dispatch(setAuthedUser("sarahedo"));
  });
};
