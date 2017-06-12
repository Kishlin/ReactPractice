import React from 'react';
import ReactDOM from 'react-dom';

function Comment(props) {
	return (
		<div className="Comment">
			<div className="UserInfor">
				<img className="Avatar"
					src={props.author.avatarUrl}
					alt={props.author.name}
				/>
				<div className="UserInfo-name">
					{props.author.name}
				</div>
			</div>
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}

function Welcome(props) {
	return <h1>Hello, {props.name}!</h1>;
}

function App() {
	return (
		<div>
			<Welcome name="Sarah" />
			<Welcome name="Laura" />
			<Welcome name="Rebecca" />
		</div>
	);
}

const element = <Welcome name="Sarah" />;
ReactDOM.render(
	<App />,
	document.getElementById('root')
);