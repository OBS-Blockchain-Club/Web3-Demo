
import { Component } from 'react';
import './App.css';

class App extends Component {

    constructor() {
      super()
      this.state = {
        account: '',
      }
    }
  
    async componentDidMount() {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
      console.log(accounts[0])
      this.setState({account: accounts[0]})
    }

    render() {
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
