import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


console.log(window);

const ipfsNode = new window.Ipfs({
    repo: 'ipfs-' + Math.random(),
    config: {
        "Addresses": {
            "Swarm": [
                "/dns4/star-signal.cloud.ipfs.team/tcp/443/wss/p2p-webrtc-star/ipfs/QmQGbDesZ8ihd1tA9XHkY7gromHywcvSR7jKb4zxjPqSc2"
            ],
            "API": "",
            "Gateway": ""
        },
        "Discovery": {
            "MDNS": {
                "Enabled": false,
                "Interval": 10
            },
            "webRTCStar": {
                "Enabled": true
            }
        },
    }
});

//const ipfsNode = window.ipfs;

ipfsNode.on('ready', () => {
    console.log("Your node is now ready to use!");
    console.log('Online status: ', ipfsNode.isOnline() ? 'online' : 'offline');
    ReactDOM.render(<App ipfs={ipfsNode} />, document.getElementById('root'));
});

ipfsNode.on('error', (error) => {
    console.log(error);
});

//ReactDOM.render(<App ipfs={ipfsNode}/>, document.getElementById('root'));

registerServiceWorker();
