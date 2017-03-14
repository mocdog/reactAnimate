import React from 'react';
import Slide from './Slide';
import Carousel from './Carousel';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['hellow','world','shit','fuck']
    }
  }
  addItem() {
    var newItems =  this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  }
  removeItem(i) {
   var newItems = this.state.items;
   newItems.splice(i, 1);
   this.setState({items: newItems});
  }
  render() {
    const { items } = this.state;
    const list = items.map((item,i) => (
      (<div key={i} onClick={this.removeItem.bind(this,i)}>{item}</div>)
    ));
    return (<div>
      <button onClick={::this.addItem}>add</button>
      <ReactCSSTransitionGroup
        transitionName="example1"
      >
        {list}
      </ReactCSSTransitionGroup>
      <Slide />
      <div className='bigBox'>
        <Carousel />
      </div>
    </div>);
  }
}
export default App;
