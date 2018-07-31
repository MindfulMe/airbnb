import React, {createClass} from 'react';
import HomeSearchBar from './Home-search-bar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const photo = {
  hero: 'https://www.airbnb.com/static/engagement/four-people-bike-99597e51f3a69bfa567999e79eb51109.jpg',
  vid: 'https://images.unsplash.com/photo-1527522922911-92b510fd0e0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=61fef46ae7cda24310a53ad061a9da1d&auto=format&fit=crop&w=3300&q=80',
}

const style ={
  margin: 12,
  heroImage: {
    backgroundImage: 'url('+ photo.vid +')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    padding: 0,
  },
  upperHalf:{
    color: '#fff',
    height: '81%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '70px',
  },
  searchContainer:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: '19%',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default createClass({
render(){
  return(
    <div id="header" className="row">

        <MuiThemeProvider>
            <div>
              <div className="container heroImage" style={style.heroImage}>
                <div style={style.upperHalf}>
                  <div className="headerHero" style={{fontSize: "3.5rem", fontWeight: "700", margin: 0, lineSpacing: 1.1, lineHeight: 1.1, paddingBottom: '-10px'}}>LIVE THERE</div>
                  <p style={{letterSpacing: "1px", padding: '0 10px',
    textAlign: 'center'}}>Book homes from local host in 191+ countries and experience a place like you live there.</p>
                  <RaisedButton label="Learn About Airbnb" labelStyle={{textTransform: "none", fontWeight: "400px", margin: "0 20px", fontWeight: 'bold'}}  />
                </div>
                <div style={style.searchContainer}>
                  <HomeSearchBar />
                </div>
                </div>
            </div>
        </MuiThemeProvider>


    </div>
  )
}
});
