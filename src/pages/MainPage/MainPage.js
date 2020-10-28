/** Natives **/
import React, { Component } from "react";
/** Style **/
import "./MainPage.scss";
/* Common */
import * as Constants from '../../common/Constants';
/* Components */
import { ReactComponent as LogoTiz }  from '../../assets/logoTiz.svg';
import {TodoListStore} from '../../components/TodoList/TodoList' 
/* Services */
import ApiService from '../../services/ApiService';
//Class
const apiService = new ApiService();

class MainPage extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);
		this.state = {
			isLoading : true
		}
		this._getData				 = this._getData.bind(this);
		this._backToPreviousPage = this._backToPreviousPage.bind(this);
	}
	componentDidMount(){
		this._isMounted = true;
		this._getData();
	}

	//------------------------------------------------------------//
	//------------------------- DATA -----------------------------//
	//------------------------------------------------------------//
	
	/* Get the data from back end */
	async _getData(){
		this.setState({
			isLoading : false
		});
	}

	/* Back to previous page */
	_backToPreviousPage(){
		this.props.history.push('/');
	}

	//------------------------------------------------------------//
	//------------------------ RENDER ----------------------------//
	//------------------------------------------------------------//

	render(){
		let { isLoading } = this.state;

		return(
			<div className="mainPage-container">
				{!isLoading && (
					<>
						<div className="mainPage-info">
							{/* Logo */}
							<div className="mainPage-info-icon">
								<LogoTiz />
							</div>

							{/* Text */}
							<div className="mainPage-info-text">
								Starter for ReactJS projects.
							</div>

							{/* Button */}
							<div className="mainPage-info-button">
								<input type="submit" value="Back" className="main-button" onClick={this._backToPreviousPage}></input>
							</div>
						</div>

						<div className="divider"></div>
						<div>
							<div className="mainPage-todoList-title">ToDo list with Redux</div>
							<div className="mainPage-todoList">
								<TodoListStore />
							</div>
						</div>
					</>
				)}
			</div>
		);
	}
}

export default MainPage;

