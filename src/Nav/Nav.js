import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: { main: 'Главная', places: 'Пункты обмена', about: 'О нас' }
    }
  }

  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              {Object.keys(this.state.nav).map((keyName, item) => (
                <li key={keyName}><a href={`/${keyName}`}>{this.state.nav[keyName]}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
