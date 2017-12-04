import React from "react";
import { Col, Row } from "../Grid";
import Panel from "../Panel";
import Note from "../Note";
import { List, 
         ListItem,
         ItemTitle,
         ItemSub, 
         ActionBtn } from "../List";

const Saved = props =>
  <Row>
    <Col size="sm-12">
      <Panel heading="Saved">
        <List>
          {props.saved.length === 0 ?
            <h3 className="text-center">Save Articles After Search</h3> :
            props.saved.map((article,i) => (
              <ListItem key={i}>
                <ItemTitle
                  key={article.title}
                  title={article.title}
                  href={article.url}
                />
                <ActionBtn 
                  key={i}
                  heading="Remove"
                  onClick={() => props.delArticle(article._id)}
                />
                <ItemSub
                  key={article.save_date}
                  heading="➞ Date Saved: "
                  mid={article.save_date}
                />
                <Note 
                  key={article._id}
                  id={article._id}
                  value={article.note}
                  loadSaved={props.loadSaved}
                />
              </ListItem>
            ))
          }
        </List>
      </Panel>
    </Col>
  </Row>;

export default Saved;
