import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Rate from './Rate/Rate';
import About from './About/About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWell: false
    }
  }

  well = () => {
    this.setState({ isWell: true })
  }

  render() {
    let well = document.querySelector('.well');

    if (this.state.isWell) {
      well.style.transform = `scaleY(0)`
    }

    return (
      <div className="site">
        <Header />
        <div className="container">
          <main>
            <Router>
              <Routes>
                <Route path='/' element={<Rate />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Rate />} />
              </Routes>
            </Router>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">
              На нашем сайте мы используем cookie для сбора информации технического характера.<br /> в частности, для
              персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения.&nbsp;
              <button className="btn btn-primary btn-sm" onClick={this.well}>OK</button></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
