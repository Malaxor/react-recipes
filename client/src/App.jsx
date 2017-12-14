//========================================================================================================================
// React
import React, { Component } from "react";
// API
import API from "./utils/API";
// Components
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {

  state = {

    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();

    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

  render() {

    return (
      <div>
        <Nav />
        <Jumbotron />

        <Container>
          <Row>
            <Col size="xs-9 sm-10">
              <Input
                name="recipeSearch"
                value={this.state.recipeSearch}
                onChange={this.handleInputChange}
                placeholder="Search For a Recipe"
              />
            </Col>
            <Col size="xs-3 sm-2">
              <Button onClick={this.handleFormSubmit} type="success" className="input-lg">
                Search
              </Button>
            </Col>
          </Row>
          
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
