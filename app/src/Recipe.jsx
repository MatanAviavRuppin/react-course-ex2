import React from 'react';

class Recipe extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               eat: false
          };
     }

     render() {
          return <div className='column is-4-desktop is-12-mobile'>
               <div className='card px-5 py-5'>
                    <div className='card-content px-0 h100p'>
                         <div className='content h100p'>
                              <div className="card-image"><img src={this.props.image} alt="" /></div>
                              <div className="has-text-weight-bold mt-3">{this.props.name}</div>
                              <div className="mt-2">Cooking Method: {this.props.cookingMethod}</div>
                              <div className="mt-2">Total Cooking Time: {this.props.time}</div>
                              <div className="mt-2">Total Calories: {this.props.calories}</div>
                              <div className="mt-2">
                                   <button className="button is-info" onClick={() => this.props.openIngredientsModal()}>Show Ingredients</button>&nbsp;
                                   { this.props.isPrepared ? 
                                        <button onClick={() => this.props.eat()} className="button is-danger">Eat!</button> : 
                                        <button onClick={() => this.props.prepare()} className="button is-primary">Prepare Dish</button> 
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </div>;
     }
}

export default Recipe;
