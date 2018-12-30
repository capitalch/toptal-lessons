import React, { Component } from 'react';
import './App.css';
// import ibuki from './ibuki.service';

class App extends Component {

  constructor(props: any) {
    super(props);
  }

  // componentDidMount() {
  //   ibuki.filterOn('my-id').subscribe((d:any)=>console.log(d.data));
  // }

  render() {
    return (
      <div className="App">
        {/* <button onClick={(e)=>ibuki.emit('my-id', 'abcd')}>Submit</button> */}
      </div>
    );
  }
}

export default App;
