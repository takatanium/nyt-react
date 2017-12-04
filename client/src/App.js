import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import { Main } from "./components/Main";
import { Saved } from "./components/Saved";
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
      saved: [],
      topic: "",
      start: date,
      end: date
    };
  };

  componentDidMount() {
    this.loadSaved();
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
    const { name, value} = event.target;
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

  loadSaved = () => {
    API.getArticles()
      .then(res =>
        this.setState({ saved: res.data })
      )
      .catch(err => console.log(err));
  };

  saveArticle = key => {
    API.saveArticle({
    	title: this.state.search[key].headline.main,
    	date: this.state.search[key].pub_date,
    	url: this.state.search[key].web_url
    })
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };

  delArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Search 
            state={this.state}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <Main 
            results={this.state.search}
            saveArticle={this.saveArticle}
          />
          <Saved 
            saved={this.state.saved}
            delArticle={this.delArticle}
            updateArticle={this.updateArticle}
            loadSaved={this.loadSaved}
          />
        </Container>
      </div>
    )
  }
};

export default App;
