import React from 'react';
import Recipe from './Recipe';
import ShowIngredientsModal from './ShowIngredientsModal';

class Recipes extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               showIngredientsModalOpenState: false,
               ingredientsToShow: [],
               recipesToPrepare: []
          };
          this.state.recipesToPrepare = this.props.recipes.map(val => val.id);
     }

     showIngredientsModalOpen(ingredients) {
          this.setState({showIngredientsModalOpenState: true, ingredientsToShow: ingredients});
     }
     showIngredientsModalClose(ingredients) {
          this.setState({showIngredientsModalOpenState: false, ingredientsToShow: []});
     }

     prepareRecipe(id) {
          const index = this.state.recipesToPrepare.indexOf(id);
          let temp = this.state.recipesToPrepare;
          temp.splice(index, 1);
          this.setState({recipesToPrepare: temp});
     }

     eatRecipe(id) {
          this.setState({recipesToPrepare: [...this.state.recipesToPrepare, id]});
     }

     render() {
          let toPrepare = [];
          let prepared = [];
          for (let rec of this.props.recipes) {
               const isPrepared = this.state.recipesToPrepare.indexOf(rec.id) === -1 ? true : false;
               let temp = <Recipe 
                         key={'recipe' + rec.id}
                         name={rec.name} 
                         ingredients={rec.ingredients}
                         image={rec.image} 
                         cookingMethod={rec.cookingMethod}
                         calories={rec.getTotalCalories()}
                         time={rec.time} 
                         isPrepared={isPrepared}
                         prepare={() => this.prepareRecipe(rec.id)}
                         eat={() => this.eatRecipe(rec.id)}
                         openIngredientsModal={() => this.showIngredientsModalOpen(rec.ingredients)}
                         />;
               
               if (isPrepared) {
                    prepared.push(temp);
               } else {
                    toPrepare.push(temp);
               }
          }
          return <>
               { this.state.showIngredientsModalOpenState ? <ShowIngredientsModal close={() => this.showIngredientsModalClose()} ingredients={this.state.ingredientsToShow} /> : '' }
               <div className="is-size-4">Dishs You Can Prepare ({toPrepare.length})</div>
               <div className="columns mt-3">{toPrepare}</div>
               <hr />
               <div className="is-size-4">Dishs You Can Eat ({prepared.length})</div>
               <div className="columns mt-3">{prepared}</div>
               <br /><br /><br />
          </>;
     }
}

export default Recipes;
