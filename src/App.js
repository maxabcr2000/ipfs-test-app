import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      ipfsHash: "",
      title: "Welcome to React"
    };

    this.init();
  }

  init = async () => {
    const {ipfs} = this.props;

    try {
      ipfs.bootstrap.list((err, res) => {
        if (err){
          console.log("error:", err);
          return;
        }

        console.log("bootstrap peers: ", res.Peers);
      });

    } catch (error){
      console.log("error:", error);
    }
  }

  handleCheckSwarmPeers = async ()=>{
    const {ipfs} = this.props;

    const peers = await ipfs.swarm.peers();
    console.log("Swarm peers:", peers);
  }

  handleChange = (event) => {
    this.setState({
      ipfsHash: event.target.value
    });
  }

  handleCatIPFS = async () => {
    const {ipfs} = this.props;

    try {
      const file = await ipfs.files.cat(this.state.ipfsHash);

      console.log("file:", file.toString('utf8'));

      this.setState({
        title: file.toString('utf8')
      });

    } catch (error){
      console.log("error:", error);
    }
  }

  render() {
    console.log("state: ", this.state);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleCheckSwarmPeers}>Check swarm peers</button>
        <br/>
        <input onChange={this.handleChange} value={this.state.ipfsHash}></input>
        <br/>
        <button onClick={this.handleCatIPFS}> Cat Ipfs data</button>
      </div>
    );
  }
}

export default App;
