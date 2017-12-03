import React from "react";
import { Col, Row } from "../Grid";
import { Panel } from "../Panel";
import { List, ListItem, ItemTitle } from "../List";
import { SaveBtn } from "../Action";

export const Main = props => 
  <Row>
    <Col size="sm-12">
      <Panel heading="Results">
        <List>
          {props.results.map((article,i) => (
            <ListItem key={i}>
              <ItemTitle
                key={i}
                title={article.headline.main}
                href={article.web_url}
              />
              <SaveBtn 
                key={article.headline.main}
                title={article.headline.main}
                href={article.web_url}
                date={article.headline.pub_date}
              />
            </ListItem>
          ))}
        </List>
      </Panel>
    </Col>
  </Row>;
