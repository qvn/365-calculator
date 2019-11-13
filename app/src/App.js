import React from 'react';
import './App.css';
// import Button from './Button';
import List from './List';
import {calculate, getDelimiter} from './calculator.js';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      expression: '//[*][!!][r9r]\n11r9r22*hh*33!!44',
      results: [],
      expressions: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      expression: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let result = calculate(this.state.expression);
    this.setState({
      expressions: [...this.state.expressions, this.state.expression + " = " + result],
      expression: String(result),
      results: [...this.state.results, result]
    });
  }

  render() {
    return (
      <div className="App">
        <form>
        <span className="font-weight-bolder">Calculator</span>
          <div className="form-group">
            <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Expression" aria-label="Expression" value={this.state.expression} onChange={this.handleChange}></input>
              <div className="input-group-append">
                
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}><span>=</span></button>
                
              </div>
            </div>
          </div>
        </form>
        {this.state.expressions.length > 0 &&
          <span className="font-weight-bolder">History</span>
        }
        <List items={this.state.expressions} />
      </div>
    );
  }
}

export default App;
