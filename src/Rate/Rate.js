import React from 'react';
import Calc from '../Calc/Calc';
import './Rate.css';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      currancyRate: {},
      baseRate: 'EUR'
    }
    this.currancy = ['USD', 'RUB', 'CAD', 'PHP'];
  }


  componentDidMount() {
    this.getRate(this.state.baseRate);
  }

  getRate = (rate) => {
    fetch(`https://open.er-api.com/v6/latest/${rate}`)
      .then(data => {
        return data.json()
      })
      .then(data => {
        let result = {};
        for (let i = 0; i < this.currancy.length; i++) {
          result[this.currancy[i]] = data.rates[this.currancy[i]]
        }
        this.setState({ currancyRate: result });
        this.setState({ baseRate: data.base_code });
      });
  }

  changeRate = async e => {
    await this.setState({ baseRate: e.target.value })
    // console.log('e: ', this.state.baseRate, 'true value: ', e.target.value);
    this.getRate(this.state.baseRate);
  }

  render() {
    let date = `${this.state.date.getDate()}-${this.state.date.getUTCMonth() + 1}-${this.state.date.getFullYear()}`
    return (
      <div className='rate'>
        <h3> Курс валют на {date}
          <select title='rates' onChange={this.changeRate} className='select_rate'>
            <option data='EUR' defaultChecked>EUR</option>
            <option data='USD'>USD</option>
            <option data='RUB'>RUB</option>
          </select>
        </h3>
        <div className="flex-container">
          {Object.keys(this.state.currancyRate).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currancyRate[keyName].toFixed(2)} *</div>
              <p>* Кол-во {keyName} за еденицу {this.state.baseRate}</p>
            </div>
          ))}
        </div>
        <Calc rate={this.state.currancyRate} base={this.state.baseRate} />
      </div>
    );
  }
}

export default Rate;
