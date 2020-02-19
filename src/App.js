import React from 'react';
import {connect} from 'react-redux'
import Header from './components/Header';
import {buyItem} from './actions/'
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = (state) => {
 
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car}/>
        <AddedFeatures ca={state.car}/>
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {buyItem})(App);
