import * as types from './actionConstants.js';
import * as d3 from 'd3';

export const retrieveCompilationStats = () => {
  return function(dispatch) {
    console.log('right here');

    d3.json('../../stats.json')
      .then(function(data) {
        console.log(data);
        // what action type should we dispatch?
        dispatch({ type: types.BUNDLE_COMPLETE, payload: data });
      })
      .catch(function(error) {
        alert('error:');
        console.log(error);
      });
  };
};
