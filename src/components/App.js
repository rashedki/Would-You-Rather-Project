import React, {Component, Fragment} from "react"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import LoadingBar from "react-redux-loading-bar"
import {handleInitialData} from "../actions/shared"
import Menu from "./Menu"
import Footer from "./Footer"
import QuestionsList from "./QuestionsList"
import NewQuestion from "./NewQuestion"
import QuestionsView from "./QuestionsView"
import LeaderBoard from "./LeaderBoard"
import Login from "./Login"
import Logout from "./Logout"

class App extends Component {

  state = { activeIndex: 0 };

  handleTabChange = (e, { activeIndex }) => {
    this.setState({ activeIndex });
  };
  resetActiveIndexToZero = () => {
      console.log("will reset active index to zero");
      this.setState({ activeIndex: 0 });
    };
  componentDidMount() {
    const { handleInitialData } = this.props;
    handleInitialData();
  }
  render() {
    const { authedUser } = this.props;
    if (!authedUser) {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar style={{ zIndex: 1000 }} />
          <Menu/>
            <div className="ui main text container" style={{marginTop: "7em"}}>
              <Switch>
                <Route
                path="/"
                exact
                render={() => {
                  return (
                    <QuestionsList
                      handleTabChange={this.handleTabChange}
                      activeIndex={this.state.activeIndex}
                    />
                  );
                }}
                // component={QuestionList}
              />
              <Route
              path="/new-question"
              render={history => {
                return (
                  <NewQuestion
                    resetActiveIndexToZero={this.resetActiveIndexToZero}
                    history={history.history}
                  />
                );
              }}
            />
                <Route path="/view-question/:qid" component={QuestionsView} />
                <Route path="/leader-board" component={LeaderBoard} />
                <Route path="/logout" component={Logout} />
                <Redirect to="/" />
              </Switch>
            </div>
            <Footer/>
          </Fragment>
        </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
const { authedUser } = state;
return { authedUser };
};

export default connect(
  mapStateToProps,
  { handleInitialData }
)(App);
