import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.web3 = new Web3(window.ethereum);
    this.state = {
      account: '',
    }
  }

  async componentDidMount() {
    try{ 
      const accounts =  await window.ethereum.request({method: 'eth_requestAccounts'})
      this.setState({ account: accounts[0] })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    console.log(this.state.account)
    return (
    <div className="App">
      <h1>
        {this.state.account}
      </h1>
    </div>
    );
  }
}

export default App;
