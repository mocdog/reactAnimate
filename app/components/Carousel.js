import React from 'react';
import './Carousel.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Carousel extends React.Component {
  static defaultProps = {
    imgs: [
      {
        id: 0,
        url: './icon/img1.jpg'
      },
      {
        id: 1,
        url: './icon/img2.jpg'
      },
      {
        id: 2,
        url: './icon/img3.jpg'
      },
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      length: props.imgs.length
    }
  }
  onclick() {
    let index = this.state.active;
    index += 1;
    if ( index >= this.state.length ) {
      index = 0;
    }
    this.setState({
      active: index
    });
  }
  render() {
    const { active } = this.state;
    const imgList = this.props.imgs.map(item => (
      item.id === active ? (<img alt='' className='carouselImg' src={item.url} />) : (null)
    ));
    return (<div className='carouselBox'>
      <button className="leftBtn" onClick={::this.onclick}>left</button>
      <ReactCSSTransitionGroup
        transitionName="carouselAnimate"
        component="ul"
      >
        {imgList}
      </ReactCSSTransitionGroup>
    </div>)
  }
}

export default Carousel;
