import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import { Main } from "./components/Main";
import { Search } from "./components/Search";
import Nav from "./components/Nav";
import { Container } from "./components/Grid";

class App extends Component {
  constructor(props) {
    super(props);

    const d = new Date();
    const date = d.toISOString().slice(0,10);

    this.state = {
      search: [],
      topic: "",
      start: date,
      end: date
    };
  };

  componentDidMount() {
    // this.displaSaved();
  };

  searchArticles = (topic, start, end) => {
    let q = topic.trim();
    q += `&begin_date=${start.replace(/-/g,'')}`;
    if (new Date(end) > new Date(start)) {
      q += `&end_date=${end.replace(/-/g,'')}`;
    }
    API.search(q)
      .then(res => this.setState({ 
        search: res.data.response.docs.slice(0,5)
      }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.topic, 
    	                  this.state.start, 
    	                  this.state.end);
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Container fluid>
            <Search 
              state={this.state}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <Main results={this.state.search}/>
            {/*saved*/}
          </Container>
        </div>
      </Router>
    )
  }
};

export default App;
