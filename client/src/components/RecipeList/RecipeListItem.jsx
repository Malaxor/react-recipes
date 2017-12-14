
import React from "react";
import Thumbnail from "../Thumbnail";
import {Row, Col} from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (

  <li className="list-group-item">
    <Row>
      <Col size="md-2">
        <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
      </Col>
      <Col size="md-9">
        <h3>{props.title}</h3>
        <p>Ingredients: {props.ingredients}</p>
        <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to recipe!</a>
      </Col>
    </Row>
  </li>
);
