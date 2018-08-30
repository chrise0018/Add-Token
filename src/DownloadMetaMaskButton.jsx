import React, { Component } from 'react';
import downloadButton from './download-metamask.png';

class DownloadMetaMaskButton extends Component {
  render() {
    return (
      <a href="https://metamask.io">
        <img className="downloadButton" src={downloadButton}/>
      </a>
    )
  }
}

export default DownloadMetaMaskButton

