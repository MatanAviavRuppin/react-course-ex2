import React from 'react';
import Recipes from './Recipes';
import RecipeAddModal from './RecipeAddModal';
import IngredientAddModal from './IngredientAddModal'
import IngredientClass from './classes/IngredientClass';
import DishRecipeClass from './classes/DishRecipeClass';

class MyKitchen extends React.Component {

     constructor() {
          super();
          this.state = {
               recipes: [],
               ingredients: [],
               modals: {
                    ingredientAdd: { open: false },
                    recipeAdd: { open: false }
               }
          };
          this.setInitialIngredients();
          this.setInitialRecipes();
     }

     setInitialRecipes() {
          this.state.recipes.push(new DishRecipeClass('Italian Pasta', [this.state.ingredients[0], this.state.ingredients[1], this.state.ingredients[2], this.state.ingredients[3]], 40, 'Cooking', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.406.325.suffix/1615916524567.jpeg', 0));
          this.state.recipes.push(new DishRecipeClass('Italian Pizza', [this.state.ingredients[2], this.state.ingredients[3]], 10, 'Bake', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60', 1));
          this.state.recipes.push(new DishRecipeClass('Italian Bolognese', [this.state.ingredients[1], this.state.ingredients[2], this.state.ingredients[3], this.state.ingredients[4]], 90, 'Cooking', 'https://anitalianinmykitchen.com/wp-content/uploads/2019/09/bolognese-sauce-600-1-of-1.jpg', 2));
     }

     setInitialIngredients() {
          this.state.ingredients.push(new IngredientClass('Broccoli', 'https://www.health.harvard.edu/media/content/images/p7_Broccoli_HH1812_gi905351392.jpg', 34, 0));
          this.state.ingredients.push(new IngredientClass('Pasta Barilla', 'https://e-kosher.gr/656-home_default/penne-rigate-barilla-500gr.jpg', 110, 1));
          this.state.ingredients.push(new IngredientClass('Tomato Sauce', 'https://www.barilla.com//-/media/images/he_il/products/il-products/arrabietta/productsaucesnew250x230.png?la=he-IL', 40, 2));
          this.state.ingredients.push(new IngredientClass('Basil', 'https://st1.foodsd.co.il/Images/Products/large/N7lOLNKTHa.jpg', 5, 3));
          this.state.ingredients.push(new IngredientClass('Meat', 'https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY=', 150, 4));
     }

     //ingredients
     ingredientAddModalOpen() {
          this.setState({ modals: {...this.state.modals, ingredientAdd: {open: true}}})
     }
     ingredientAddModalClose() {
          this.setState({ modals: {...this.state.modals, ingredientAdd: {open: false}}})
     }
     ingredientAddModalCreate(data) {
          this.setState({ingredients: [...this.state.ingredients, new IngredientClass(data.name, data.image, data.calories, this.state.ingredients.length)]});
     }

     //recipes
     recipeAddModalOpen() {
          this.setState({ modals: {...this.state.modals, recipeAdd: {open: true}}})
     }
     recipeAddModalClose() {
          this.setState({ modals: {...this.state.modals, recipeAdd: {open: false}}})
     }
     recipeAddModalCreate(data) {
          this.setState({recipes: [...this.state.recipes, new DishRecipeClass(data.name, data.ingredients, data.time, data.cookingMethod, data.image, this.state.recipes.length)]});
     }

     render() {
          return <>
               { this.state.modals.ingredientAdd.open ? <IngredientAddModal 
                    create={(data) => this.ingredientAddModalCreate(data)}
                    close={() => this.ingredientAddModalClose()} /> : '' }

               { this.state.modals.recipeAdd.open ? <RecipeAddModal 
                    ingredients={this.state.ingredients}
                    close={() => this.recipeAddModalClose()} 
                    create={(data) => this.recipeAddModalCreate(data)} /> : '' }

               <div className='container mt-5 px-5'>
                    <div className="has-text-centered">
                         <div className="is-size-2 pb-5">My Italian Kitchen 🍕</div>
                         <span className="is-size-4 mt-4 pb-2">Actions:</span>&nbsp;<div className="pt-2 is-hidden-desktop"></div>
                         <button onClick={() => this.recipeAddModalOpen()} id="add-recipe-modal-open-button" className="button is-info">New Recipe</button>&nbsp;
                         <button onClick={() => this.ingredientAddModalOpen()} id="add-ingredient-modal-open-button" className="button is-info">New Ingredient</button>
                    </div>
                    <div id="recipes-render" className="columns is-mobile is-flex-wrap-wrap mt-5"></div>
                    <Recipes recipes={this.state.recipes} />
               </div>
          </>;
     }
}

export default MyKitchen;
