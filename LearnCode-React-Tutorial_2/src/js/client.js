import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor() {  // you can call constructor() on a class but...
    super();       // you must call super() on the first line
    this.name = 'Steve';
  }
  render() {
    return (
        <h1>It Works - {this.name}!</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
