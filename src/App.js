import React from 'react';
import {connect} from 'react-redux'
import Header from './components/Header';
import {buyItem, removeFeature} from './actions/'
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = ({state, buyItem, removeFeature}) => {
 console.log('from app js', state);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car}/>
        <AddedFeatures removeFeature={removeFeature} car={state.car}/>
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} car={state.car} additionalFeatures={state.additionalFeatures}/>
        <Total car={state.car} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {buyItem, removeFeature})(App);
