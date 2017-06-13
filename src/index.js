import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil.</p>;
	}
	return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
			<legend>Enter temperature in {scaleNames[scale]}:</legend>
			<input value={temperature}
			onChange={this.props.callback} />
			</fieldset>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperatureCelsius:   '',
			temperatureFarenheit: ''
		};
	}

	changeTemperatureCelcius = (e) => {
		let celsius = e.target.value;
		let farenheit = toFahrenheit(celsius);

		this.setState({
			'temperatureCelsius': celsius, 
			'temperatureFarenheit': farenheit
		});
	}

	changeTemperatureFahrenheit = (e) => {
		let farenheit = e.target.value;
		let celsius = toCelsius(farenheit);

		this.setState({
			'temperatureCelsius': celsius, 
			'temperatureFarenheit': farenheit
		});
	}

	render() {
		const temperature = this.state.temperature;
		return (
			<div>
			<TemperatureInput scale="c" temperature={this.state.temperatureCelsius} callback={(e) => this.changeTemperatureCelcius(e)} />
			<TemperatureInput scale="f" temperature={this.state.temperatureFarenheit} callback={(e) => this.changeTemperatureFahrenheit(e)} />
			<BoilingVerdict celsius={this.state.temperatureCelsius} />
			</div>
		);
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('root')
);