import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Slide extends React.Component {
  static propTypes = {
    banners: React.PropTypes.arrayOf(
      React.PropTypes.string
    ).isRequired
  }
  static defaultProps = {
    banners: ['banner_1','banner_2','banner_3']
  }
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }
  click(index) {
    this.setState({
      active: index
    })
  }
  render() {
    const { banners } = this.props;
    const { active } = this.state;
    const item = banners.map((item, i) => (
      active === i ? (<div>{item}</div>) :(null)
    ))
    return (<div className='slideBox'>
      <div>
        <button><li onClick={this.click.bind(this,0)}>1</li></button>
        <button><li onClick={this.click.bind(this,1)}>2</li></button>
        <button><li onClick={this.click.bind(this,2)}>3</li></button>
      </div>
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionLeave={false}
        >
          {item}
        </ReactCSSTransitionGroup>
      </div>
    </div>)
  }
}


export default Slide;
