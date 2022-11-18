import React from 'react';

class IngredientAddModal extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               inputName: React.createRef(),
               inputImage: React.createRef(),
               inputCalories: React.createRef()
          };
     }

     create() {
          const data = {
               name: this.state.inputName.current.value,
               image: this.state.inputImage.current.value,
               calories: this.state.inputCalories.current.value,
          }
          this.props.create(data);
          this.props.close();
     }

     render() {
          return <div className="modal is-active">
          <div className="modal-background" onClick={() => this.props.close()}></div>
          <div className="modal-content">
               <div className="card mx-3">
                    <div className="card-header">
                         <div className="card-header-title">Create a New Ingredient</div>
                         <div className="card-header-icon has-text-weight-bold is-size-4" onClick={() => this.props.close()}>&times;</div>
                    </div>
                    <div className="card-content calculated">
                         <div className="control"><input ref={this.state.inputName} className="input" type="text" placeholder="Name..." /></div>
                         <div className="control mt-3"><input ref={this.state.inputImage} className="input" type="text" placeholder="Image Url..." /></div>
                         <div className="control mt-3"><input ref={this.state.inputCalories} className="input" type="text" placeholder="Calories..." /></div>
                    </div>
                    <div className="card-footer">
                         <span className="card-footer-item has-background-primary has-text-white" onClick={() => this.create()}>Create</span>
                         <span className="card-footer-item card-footer-item-close" onClick={() => this.props.close()}>Cancel</span>
                    </div>
               </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={() => this.props.close()}></button>
     </div>;
     }
}

export default IngredientAddModal;
