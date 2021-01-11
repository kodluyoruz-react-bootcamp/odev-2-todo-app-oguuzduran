import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{this.props.todoLength} </strong>
					items left
				</span>

				<ul className="filters">
					<li>
						{/* <a className="selected">All</a> */}
						<button onClick={this.props.filterAll}>All</button>
					</li>
					<li>
						<button onClick={this.props.filterActive} style={{ paddingLeft: 5, paddingRight: 5 }}>
							Active
						</button>
					</li>
					<li>
						<button onClick={this.props.filterCompleted}>Completed</button>
					</li>
				</ul>

				<button className="clear-completed" onClick={this.props.clearItems}>
					Clear completed
				</button>
			</footer>
		);
	}
}

export default Footer;
