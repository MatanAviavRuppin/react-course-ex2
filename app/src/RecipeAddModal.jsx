import React from 'react';
import Ingredient from './Ingredient';

class RecipeAddModal extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               inputRecName: React.createRef(),
               inputRecMethod: React.createRef(),
               inputRecTime: React.createRef(),
               inputRecImage: React.createRef(),
               cardContent: React.createRef(),
               selectedIngredients: []
          };
     }

     handleChecked(id, checked) {
          const idFound = this.state.selectedIngredients.indexOf(id) === -1 ? false : true;
          if (checked && !idFound) {
               this.setState({selectedIngredients: [...this.state.selectedIngredients, id]})
          } 
          if (!checked && idFound) {
               let temp = this.state.selectedIngredients;
               temp.splice(idFound, 1);
               this.setState({selectedIngredients: temp})
          }
     }

     create() {
          const data = {
               name: this.state.inputRecName.current.value,
               image: this.state.inputRecImage.current.value,
               cookingMethod: this.state.inputRecMethod.current.value,
               time: this.state.inputRecTime.current.value,
               ingredients: this.state.selectedIngredients.map((id) => this.props.ingredients[id]),
          }
          this.props.create(data);
          this.props.close();
     }

     render() {
          let allIngredients = [];
          for (let ingredient of this.props.ingredients) {
               allIngredients.push(
                    <Ingredient 
                         key={'ingredientAdd' + ingredient.id}
                         id={ingredient.id}
                         name={ingredient.name}
                         image={ingredient.image}
                         calories={ingredient.calories}
                         addMode={true}
                         handleChecked={(checked) => this.handleChecked(ingredient.id, checked)}
                    />
               );
          }

          return <div className="modal is-active">
          <div className="modal-background" onClick={() => this.props.close()}></div>
          <div className="modal-content" ref={this.state.cardContent}>
               <div className="card mx-3">
                    <div className="card-header">
                         <div className="card-header-title">Create a New Recipe</div>
                         <div className="card-header-icon has-text-weight-bold is-size-4" onClick={() => this.props.close()}>&times;</div>
                    </div>
                    <div className="card-content calculated">
                         <div className="control"><input ref={this.state.inputRecName} className="input" type="text" placeholder="Name..." /></div>
                         <div className="control mt-3"><input ref={this.state.inputRecMethod} className="input" type="text" placeholder="Cooking Method..." /></div>
                         <div className="control mt-3"><input ref={this.state.inputRecTime} className="input" type="text" placeholder="Cooking Time..." /></div>
                         <div className="control mt-3"><input ref={this.state.inputRecImage} className="input" type="text" placeholder="Image Url..." /></div>
                         <div className="mt-5">
                              <div className="is-size-5">Choose Ingredients:</div>
                              <div className="columns is-mobile mt-1">
                                   {allIngredients}
                              </div>
                         </div>
                    </div>
                    <div className="card-footer">
                         <span id="add-recipe-modal-add-button" className="card-footer-item has-background-primary has-text-white" onClick={() => this.create()}>Create</span>
                         <span className="card-footer-item card-footer-item-close" onClick={() => this.props.close()}>Cancel</span>
                    </div>
               </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={() => this.props.close()}></button>
     </div>;
     }
}

export default RecipeAddModal;
