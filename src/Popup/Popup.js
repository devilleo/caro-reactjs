import React from "react";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="row">
            <div className="col">
              <h1>{this.props.text}</h1>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-danger"
                onClick={this.props.closePopup}
              >
                Close me
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
