import React from 'react';

class Ingredient extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               checkbox: React.createRef()
          };
     }

     handleChange() {
          this.props.handleChecked(this.state.checkbox.current.checked);
     }

     render() {
          const addMode = this.props.addMode ? true : false;
          return <div className="column is-4-desktop is-12-mobile">
               <div className="card px-5 py-5">
                    <div className="card-content px-0 h100p">
                         <div className="content h100p">
                              <div className="card-image"><img src={this.props.image} alt="" /></div>
                              <div className="has-text-weight-bold mt-3">{this.props.name}</div>
                              <div className="mt-2">Calories: {this.props.calories} </div>
                              { addMode ? <div className="mt-2"><label className="checkbox"><input ref={this.state.checkbox} type="checkbox" onChange={() => this.handleChange()} value={this.props.id} />&nbsp;Add</label></div> : '' }
                         </div>
                    </div>
               </div>
          </div>;
     }
}

export default Ingredient;
