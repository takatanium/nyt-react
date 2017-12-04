import React, { Component } from "react";
import API from "../../utils/API";
import { ActionBtn } from "../List";

class Note extends Component {
  state = {
    note: ""
  }

  handleInputChange = event => {
    const { name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  updateArticle = key => {
    API.updateArticle(key, {
      note: this.state.note
    })
      .then(res => {
        this.props.loadSaved();
        this.setState({ note: "" });
      })
      .catch(err => console.log(err)); 
  };

  render() {
    return (
      <div>
        <h5 className="pull-left">Notes:</h5>
        <textarea 
          className="form-control" 
          rows="5" 
          value={this.state.note || this.props.value}
          onChange={this.handleInputChange}
          name="note"
        />
        <br />
        <ActionBtn
          heading="Update"
          disabled={!this.state.note}
          onClick={() => this.updateArticle(this.props.id)}
        />
      </div>
    )
  };
};

export default Note;
