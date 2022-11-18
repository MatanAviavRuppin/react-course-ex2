import React from 'react';
import Ingredient from './Ingredient';

class ShowIngredientsModal extends React.Component {

     constructor(props) {
          super(props);
          this.state = {};
     }

     render() {
          let allIngredients = [];
          for (let ingredient of this.props.ingredients) {
               allIngredients.push(
                    <Ingredient 
                         key={'ingredientShow' + ingredient.id}
                         id={ingredient.id}
                         name={ingredient.name}
                         image={ingredient.image}
                         calories={ingredient.calories}
                         addMode={false}
                    />
               );
          }

          return <div className="modal is-active">
               <div className="modal-background" onClick={() => this.props.close()}></div>
               <div className="modal-content">
                    <div className="card mx-3">
                         <div className="card-header">
                              <div className="card-header-title">Ingredients of This Recipe</div>
                              <div className="card-header-icon has-text-weight-bold is-size-4" onClick={() => this.props.close()}>&times;</div>
                         </div>
                         <div className="card-content calculated">
                              <div className="columns is-mobile mt-1">
                                   {allIngredients}
                              </div>
                         </div>
                         <div className="card-footer">
                              <span className="card-footer-item card-footer-item-close" onClick={() => this.props.close()}>Close</span>
                         </div>
                    </div>
               </div>
               <button className="modal-close is-large" aria-label="close" onClick={() => this.props.close()}></button>
          </div>;
     }
}

export default ShowIngredientsModal;
