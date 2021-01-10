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
						<a href={this.props.filterAll}>All</a>
					</li>
					<li>
						<a href={this.props.filterActive}>Active</a>
					</li>
					<li>
						<a href={this.props.filterCompleted}>Completed</a>
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
