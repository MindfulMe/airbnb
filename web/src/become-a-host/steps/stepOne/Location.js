import React, { createClass } from 'react';
import { Link } from 'react-router';

const styles = {
  main: {
    backgroundImage: 'url(' + 'http://static1.squarespace.com/static/55fa2918e4b08929c4af4bfa/5707588bab48de09bc427fb3/570758ece707eb820b407d6e/1460099353424/Renan+Ozturk+insta+photo+%281+of+1%29-39.jpg' + ')',
    backgroundSize: 'cover',
    position: "fixed",
    top: 67,
    bottom: 0,
    width: '100%',
  }
}


export default createClass({
  render() {
    return (
      <div style={styles.main}>
        <div style={{ marginTop: 100 }}>
          <Link to='/host/amenities'>
            <div style={{ backgroundColor: '#1F8579', opacity: ".8", textAlign: "center" }}>Under Construction 😲</div>
          </Link>
        </div>
      </div>
    )
  }
})
