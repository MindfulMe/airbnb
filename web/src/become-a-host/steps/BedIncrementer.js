import React, {createClass} from 'react';

export default createClass({
    decrement: function() {
  	this.refs.counter.decrement();
  },
  increment: function() {
  	this.refs.counter.increment();
  },
  render: function() {
    return (
    	<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      	<div style={{display: "flex", flexDirection: "row"}}>
      	<Counter ref="counter" />
          <div className="increment-label">
              {console.log("Can I log in here")}
              {/* {(this.state.number === 1)
              ? <div>{this.state.listing.beds} bed</div>
              : <div>{this.state.listing.beds} beds</div>
              } */}
              bed
          </div>
        </div>
      	<Logic decrement={this.decrement} increment={this.increment} />

      </div>
    );
  }
});

var Logic = createClass({
  render: function() {
    return (
        <div>
        <button className="subtract" onClick={this.props.decrement}> - </button>
        <button className="add" onClick={this.props.increment}> + </button>
        </div>
    )
  }
});

var Counter = createClass({
	getInitialState: function() {
  	return {
    	counter: 1
    };
  },
	increment: function() {
  	this.setState({
    	counter: this.state.counter + 1
    });
  },
  decrement: function() {
  this.setState({
  counter: this.state.counter - 1
  });
  },
  render: function() {
    return <div>{this.state.counter}</div>;
  }
});
