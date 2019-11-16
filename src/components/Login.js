import React, {Component} from "react"
import { connect } from "react-redux"
import { Dropdown, Message } from "semantic-ui-react"
import { setAuthedUser } from "../actions/authedUser"

class Login extends Component {
  state = {
    selectedUser: null,
    message: { hidden: true, content: "" }
   };

   referrer = null;

   componentDidMount() {
     const {
       history,
       location: { pathname }
     } = this.props;
     this.referrer = pathname;
     history.push("/login");
   }

  handleUserSelection = (event, data) => {
    this.setState({ selectedUser: data.value });
  };

  handleUserLogin = () => {
    const { history } = this.props;
    if (!this.state.selectedUser) {
      this.setState({
        message: {
          hidden: false,
          content: "Please select a user from the list to login."
        }
      });
      return;
    } else {
      this.setState({
        message: {
          hidden: true,
          content: ""
        }
      });
    }
    this.props.setAuthedUser(this.state.selectedUser);
    if (this.referrer === "/logout" || this.referrer === "/login") {
      history.push("/");
    } else {
      history.push(this.referrer);
    }
  };
  render() {
    const { users } = this.props;
    if (!users) {
      return;
    }

    const userOptions = Object.keys(users).map(userId => ({
      key: userId,
      value: userId,
      text: users[userId].name,
      image: { avatar: true, src: users[userId].avatarURL }
    }));
    return (
      <div className="ui container">
        <div className="ui middle aligned center aligned grid">
          <div className="column" style={{ width: "420px", marginTop: "5em" }}>
            <h2 className="ui black image header">
              <img src="./wouldYouRather_icon.png" className="ui image" alt="" />
              <div className="content">Log-in to your account</div>
            </h2>
            <form className="ui large form">
              <div className="ui raised segment">
                <div className="field">
                  <Dropdown
                    placeholder="Select a User"
                    fluid
                    selection
                    options={userOptions}
                    onChange={this.handleUserSelection}
                  />
                </div>
                <Message hidden={this.state.message.hidden} negative>
                  {this.state.message.content}
                </Message>
                <div className="field">
                  Select a user from above and click the login button.
                  <br />
                  You don't required to enter a password.
                </div>
                <div
                  className="ui fluid black submit button"
                  onClick={this.handleUserLogin}
                >
                  Login
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(
  mapStateToProps,
  { setAuthedUser }
)(Login);
