import React, { useState } from 'react'
import $ from 'jquery';
import './App.css'

class App extends React.Component {
  preview(src) {
    let flashvars = { src, autoPlay: true, verbose: true };
    window.swfobject.embedSWF("SampleMediaPlayback.swf", 'player', 600, 300, 10, null, flashvars);
  }

  render() {
    let buttonStyle = { padding: '10 5', margin: 10, fontSize: 18 };

    return (
      <div className="App">
        <div style={{ margin: 20 }}>
          <button style={buttonStyle} onClick={() => {
            this.preview('');
          }}>null</button>
          <button style={buttonStyle} onClick={() => {
            this.preview('rtmp://202.69.69.180:443/webcast/bshdlive-pc');
          }}>source1</button>
          <button style={buttonStyle} onClick={() => {
            this.preview('rtmp://58.200.131.2:1935/livetv/hunantv');
          }}>source2</button>
        </div>
        <div ref='playerContainer'>
          <div id='player' />
        </div>
      </div>
    )
  }
}

export default App;
