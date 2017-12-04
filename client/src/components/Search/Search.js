import React from "react";
import Panel from "../Panel";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";

const Search = props =>
  <Row>
    <Col size="sm-12">
      <Panel heading="Search">
        <form>
          <Input
            heading="Topic"
            value={props.state.topic}
            onChange={props.handleInputChange}
            name="topic"
            placeholder="Enter Search Term(s)"
          />
          <Input
            heading="Start Date"
            value={props.state.start}
            onChange={props.handleInputChange}
            name="start"
            type="date"
          />
          <Input
            heading="End Date"
            value={props.state.end}
            onChange={props.handleInputChange}
            name="end"
            type="date"
          />
          <FormBtn
            disabled={!props.state.topic}
            onClick={props.handleFormSubmit}
          >
            Search
          </FormBtn>
        </form>
      </Panel>
    </Col>
  </Row>;

export default Search;
