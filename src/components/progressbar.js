import React, { Component } from "react";

export class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: null,
    };
  }
  render() {
    setTimeout(() => {
      const { done } = this.props;
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      this.setState({ style: newStyle });
    }, 2000);
    const { style } = this.state;
    const { done } = this.props;
    return (
      <div>
        <div className="progress">
          <div className="progress-bar" style={style}>
            {done}%
          </div>
        </div>
      </div>
    );
  }
}

export class SuccessBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSuc: null,
      styleRig: null,
      styleWro: null,
      right: 0,
      wrong: 0,
      done: 0,
    };
  }

  render() {
    setTimeout(() => {
      const { correct, attempt, remain } = this.props;

      const rightPercent = ((correct + remain) * 100) / 20;
      const wrongPercent = 100 - (correct * 100) / 20;
      const successPercent = (correct * 100) / attempt;

      const newStyleSuc = {
        opacity: 1,
        textAlign: "right",
        width: `${successPercent}%`,
      };
      const newStyleRig = {
        opacity: 1,
        textAlign: "right",
        width: `${rightPercent}%`,
      };
      const newStyleWro = {
        opacity: 1,
        textAlign: "right",
        width: `${wrongPercent}%`,
      };

      this.setState({
        styleSuc: newStyleSuc,
        styleRig: newStyleRig,
        styleWro: newStyleWro,
        right: rightPercent,
        wrong: wrongPercent,
        done: successPercent,
      });
    }, 2000);
    const { styleSuc, styleRig, styleWro, done, right, wrong } = this.state;
    const { success } = this.props;
    return (
      <div>
        <div className="bar">
          <div className="progress-right" style={styleRig}>
            <p>{right}%</p>
          </div>
          <div className="progress-done" style={styleSuc}>
            {done}%
          </div>
          <div className="progress-wrong" style={styleWro}>
            <p>{wrong}%</p>
          </div>
        </div>
      </div>
    );
  }
}
