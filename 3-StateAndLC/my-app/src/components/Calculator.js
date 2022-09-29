import React from 'react';
import Button from 'react-bootstrap/Button';

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            result: "",
            operator: null
        }
    }

    calculator = (operator) => {
        const {firstNumber, secondNumber} = this.state;
        switch(operator) {
            case '+': this.setState({result: parseFloat(firstNumber) + parseFloat(secondNumber)});
            break;
            case '-': this.setState({result: parseFloat(firstNumber) - parseFloat(secondNumber)});
            break;
            case '*': this.setState({result: parseFloat(firstNumber) * parseFloat(secondNumber)});
            break;
            case '/': this.setState({result: parseFloat(firstNumber) / parseFloat(secondNumber)});
            break;
            default: this.setState({ result: "Invalid input" }); break;
        }
    }

    render() {
        return (
            <div className='container pt-3'>
                <h1> Calculator </h1>
                <input type="number" onChange={(e) => {this.setState({ firstNumber: e.target.value })}} placeholder='Enter First Number'/> <br/>
                <input type="number" onChange={(e) => {this.setState({ secondNumber: e.target.value })}} placeholder='Enter First Number'/>
                <p className="result">Result: {this.state.result}</p>
                <Button type="text" onClick={(e) => this.calculator('+')} as="a" variant="primary" style={{margin: '8px 2px'}}> + </Button>
                <Button type="text" onClick={(e) => this.calculator('-')} as="a" variant="primary" style={{margin: '8px 2px'}}> - </Button>
                <Button type="text" onClick={(e) => this.calculator('*')} as="a" variant="primary" style={{margin: '8px 2px'}}> X </Button>
                <Button type="text" onClick={(e) => this.calculator('/')} as="a" variant="primary" style={{margin: '8px 2px'}}> / </Button>
            </div>
        )
    }
}

export default Calculator;