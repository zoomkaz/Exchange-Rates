import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relust: 0,
      type: 'EUR'
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate }
  }

  caclRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrancy = elements[0].value;
    let typeCurrancy = elements[1].value;
    this.setState({ type: typeCurrancy });
    this.setState({ result: (countCurrancy / this.state.rate[typeCurrancy]).toFixed(2) });
  }

  render() {
    return (
      <div className='calc'>
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу {this.state.type} за {this.props.base}</div>
          <div>
            <form onSubmit={this.caclRate}>
              <input type="number" defaultValue="150" name='count-currancy' />
              <select name="type-currancy" id="">
                {Object.keys(this.props.rate).map((keyName, i) => (
                  <option key={keyName} value={keyName}>{keyName}</option>
                ))}
              </select>
              <input type='submit' defaultValue='calc' value='Посчитать' />
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>{this.props.base} {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
