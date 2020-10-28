/** Natives **/
import React, { Component } from "react";
/** Style **/
import "./LoginPage.scss";
/* Images */
/* Common */
import * as Constants from '../../common/Constants';
/* Services */
import {auth} from "../../services/FirebaseCloudService"
import StringService from '../../services/StringService';
/* Plugins */
import { withRouter } from 'react-router-dom';
// Class
const stringService = new StringService();


class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputLogin    : '',
			inputPassword : '',
		};
		this.handleChangeLogin    = this.handleChangeLogin.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this._onConnect           = this._onConnect.bind(this);
	}
	
	/* Get value login */
	handleChangeLogin(event) {
		this.setState({inputLogin: event.target.value});
	}

	/* Get value Password */
	handleChangePassword(event) {
		this.setState({inputPassword: event.target.value});
	}

	/* Submit values */
	_onConnect() {
		// TODO : Put login logic

		this.props.history.push('/main');
	}

	render(){
		let { inputLogin, inputPassword } = this.state;
		return (
			<div className="loginPage-container">
				<div className="loginPage-panel">
				{/* Logo */}
				
				{/* Inputs */}
					<div className="loginPage-panel-inputs">
						<div className="loginPage-panel-inputs-input">
							<h5 className="loginPage-panel-inputs-input-text">Mail</h5>
							<input value={inputLogin} onChange={this.handleChangeLogin} id="txtLogin" type="text"></input>
						</div>
						<div className="loginPage-panel-inputs-input">
							<h5 className="loginPage-panel-inputs-input-text">Password</h5>
							<input value={inputPassword} onChange={this.handleChangePassword} id="txtPassword" type="password"></input>
						</div>
					</div>

				{/* Input button connection */}
					<div>
						<input type="submit" value="Login" className="main-button" onClick={this._onConnect}></input>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(LoginPage);

