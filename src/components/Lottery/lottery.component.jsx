import React from 'react';
import Ball from '../Ball/ball.component';
import './lottery.styles.css';

class Lottery extends React.Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        () => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n, index) => {
            return <Ball key={index} num={n} />;
          })}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
