import React, { Component, memo } from 'react';

export class Title extends Component {
	render() {
		return (
			<>
				<h1>todos</h1>
			</>
		);
	}
}

export default memo(Title);
