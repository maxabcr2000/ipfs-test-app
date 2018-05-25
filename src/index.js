import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


console.log(window);

// const ipfsNode = new window.Ipfs({ 
//     repo: 'ipfs-' + Math.random(),
// });

const ipfsNode = window.ipfs;

// ipfsNode.on('ready', () => {
//     console.log("Your node is now ready to use!");
//     console.log('Online status: ', ipfsNode.isOnline() ? 'online' : 'offline');
//     ReactDOM.render(<App ipfs={ipfsNode}/>, document.getElementById('root'));
// });

// ipfsNode.on('error', (error)=>{
//     console.log(error);
// });

ReactDOM.render(<App ipfs={ipfsNode}/>, document.getElementById('root'));

registerServiceWorker();
