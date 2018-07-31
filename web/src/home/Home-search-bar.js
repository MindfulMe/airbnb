import React, {createClass} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

import SearchBar from '../date-range-picker/SearchBar.jsx';
require('./_datepicker.scss');

var HomeSearchBar = createClass({

render(){
  return(
    <div>
      <SearchBar />
    </div>
    )
}

})

export default HomeSearchBar
