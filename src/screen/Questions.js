import React, { Component } from "react";

import Name from "./../components/decrypt";

import ques from "../components/json/questions.json";

import { ProgressBar, SuccessBar } from "../components/progressbar";

//Icon
import SolidStar from "../components/solidStar";
import RegularStar from "../components/regularStar";

export default class questions extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      next: 1,
      success: null,
      unsuccess: null,
      rightAns: "",
      correct: 0,
      wrong: 0,
      progress: 0,
      total: 20,
      attempt: 0,
      msg: "",
      msgStyle: null,
    };
  }

  render() {
    const handleAns = (e, a) => {
      var ans = e.target.value;
      {
        if (ans === a) {
          this.setState({
            success: {
              background: "#145A32",
              color: "#fff",
              border: "#145A32",
              pointerEvents: "none",
              cursor: "default",
            },
            unsuccess: {
              pointerEvents: "none",
              cursor: "default",
            },
            msg: "Correct Answer",
            msgStyle: {
              background: "#0D4000",
              color: "#fff",
              border: "#0D4000",
              visibility: "visible",
            },
            correct: ++this.state.correct,
            attempt: ++this.state.attempt,
            remain: this.state.total - this.state.attempt,
          });
        } else {
          this.setState({
            success: {
              background: "#145A32",
              color: "#fff",
              border: "#145A32",
              pointerEvents: "none",
              cursor: "default",
            },
            unsuccess: {
              background: "#A93226",
              color: "#fff",
              border: "#A93226",
              pointerEvents: "none",
              cursor: "default",
            },
            msg: "Wrong Answer",
            msgStyle: {
              background: "#4D0700",
              color: "#fff",
              border: "#4D0700",
              visibility: "visible",
            },
            wrong: ++this.state.wrong,
            attempt: ++this.state.attempt,
            remain: this.state.total - this.state.attempt,
          });
        }
      }
    };

    const handleNext = () => {
      this.setState({
        current: this.state.next,
        next:
          this.state.next >= ques.length
            ? this.state.next
            : this.state.next + 1,

        success: null,
        unsuccess: null,
        rightAns: "",
        progress: this.state.progress + 5,
        msg: "",
        msgStyle: null,
      });
    };

    const {
      current,
      next,
      success,
      unsuccess,
      progress,
      attempt,
      total,
      remain,
      correct,
      wrong,
      msg,
      msgStyle,
    } = this.state;

    return (
      <div>
        <ProgressBar done={progress} />
        <div>
          {ques.slice(current, next).map((data, index) => {
            return (
              <div key={index} className="quizPanel">
                <div>
                  <h1>
                    Question {attempt} of {total}{" "}
                  </h1>
                  <h2>{decodeURIComponent(data.category)}</h2>
                  {data.difficulty === "hard" ? (
                    <div className="iconStyle">
                      <SolidStar />
                      <SolidStar />
                      <SolidStar />
                      <RegularStar />
                      <RegularStar />
                    </div>
                  ) : data.difficulty === "medium" ? (
                    <div className="iconStyle">
                      <SolidStar />
                      <SolidStar />
                      <RegularStar />
                      <RegularStar />
                      <RegularStar />
                    </div>
                  ) : (
                    <div className="iconStyle">
                      <SolidStar />
                      <RegularStar />
                      <RegularStar />
                      <RegularStar />
                      <RegularStar />
                    </div>
                  )}
                </div>
                <div className="quiz">
                  <div>
                    <h3>Q: {decodeURIComponent(data.question)}</h3>
                  </div>
                  <div className="option">
                    <button
                      ref={(btn) => {
                        this.btn = btn;
                      }}
                      value={data.correct_answer}
                      onClick={(e) => handleAns(e, data.correct_answer)}
                      style={success}
                    >
                      {decodeURIComponent(data.correct_answer)}
                    </button>
                    {data.incorrect_answers.map((opt) => {
                      return (
                        <button
                          ref={(btn) => {
                            this.btn = btn;
                          }}
                          key={opt}
                          value={opt}
                          onClick={(e) => handleAns(e, data.correct_answer)}
                          style={unsuccess}
                        >
                          {decodeURIComponent(opt)}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="option">
                  <button
                    style={{
                      backgroundColor: "#dec664",
                      float: "right",
                    }}
                    onClick={() => handleNext()}
                  >
                    Next
                  </button>
                  <p className="msg" style={msgStyle}>
                    {msg}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {progress === 100 ? (
          <div className="quizPanel">
            <h2>
              Total Questions are {total}. {Name} attempt {attempt} Questions in
              which {correct} were right and {wrong} were wrong answers.
            </h2>
          </div>
        ) : null}
        <SuccessBar correct={correct} attempt={attempt} remain={remain} a />
      </div>
    );
  }
}
