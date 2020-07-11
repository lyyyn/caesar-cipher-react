import React from 'react';
import './App.css';
import DisplayHeader from './DisplayHeader';
import DisplayEncodeBox from './EncodeBox';
import DisplayDecodeBox from './DecodeBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <DisplayHeader />
        <div className="code-boxes">
          <DisplayEncodeBox />
          <DisplayDecodeBox />
          {/* <DisplayDecodeBox codeType={codeType.filter(obj => obj.type === 'dec')} /> */}
        </div>
      </div>
    )
  }
}

export default App;
