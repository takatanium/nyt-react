import React from "react";
import { Col, Row } from "../Grid";
import Panel from "../Panel";
import { List, ListItem, ItemTitle, ActionBtn } from "../List";

const Main = props => 
  <Row>
    <Col size="sm-12">
      <Panel heading="Results">
        <List>
          { props.results.length === 0 ? 
            <h3 className="text-center">No Search Results</h3> : 
            props.results.map((article,i) => (
              <ListItem key={i}>
                <ItemTitle
                  key={article.headline.main}
                  title={article.headline.main}
                  href={article.web_url}
                />
                <ActionBtn 
                  key={i}
                  heading="Save"
                  onClick={() => props.saveArticle(i)}
                />
              </ListItem>
            ))
          }
        </List>
      </Panel>
    </Col>
  </Row>;

export default Main;
