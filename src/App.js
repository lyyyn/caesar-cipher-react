import React from 'react';
import './App.css';
import DisplayHeader from './DisplayHeader';

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
          </div>
      )
  }
}

export default App;
