import React, {Component} from 'react'

import Rheostat from 'rheostat'
import Slider from 'react-slick'
import { Link } from 'react-router'
require('./searchResults.scss');

var sliderMin = 0;

class ProgressBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='rheostat-progress'></div>
    )
  }
}

class PrevArrow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div {...this.props} className='prev-arrow'>
        <i style={{ color: 'white', fontSize: '40px' }} className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
    )
  }
}

class NextArrow extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div {...this.props} className='next-arrow'>
        <i style={{ color: 'white', fontSize: '40px' }} className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    )
  }
}

export default class SearchResults extends Component {

  constructor(props) {
    super(props)

    this.state = {
      iCenter: {
        lng: -90.1056957,
        lat: 29.9717272
      },
      checker: false,
      icon: {
        path: 'M 0,0 20,0 20,16 14,16 10,24 6,16 0,16 z',
        fillColor: '#FF5A5F',
        fillOpacity: 1,
        scale: 1.5,
        strokeColor: 'RGBA(100,100,100,0.5)',
        strokeWeight: 1,
      },
      entireHome: false,
      privateRoom: false,
      sharedRoom: false,
      location: null,
      data: null,
      startDate: null,
      endDate: null,
      numGuests: 1,
      values: [0, 100],
      sliderMin: 0,
      sliderMax: 100,
      roomTypeSelected: null,
      picture_urls: [],
      propertyNames: [],
      star_rating: [],
      price_array: [],
      room_type_array: [],
      id_array: []
    }
  }

  static propTypes() {
    initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  }

  render = () => {

    var settings = {
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 0.0001
    };

    let arrOfSliders = [];

    if (this.state.picture_urls.length != 0) {
      for (let i = 0; i < this.state.picture_urls.length; i++) {
        var slider = <div className='slider-container'><Slider className='slider' {...settings}>
          <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][0]} ></img></div>
          <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][1]} ></img></div>
          <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][2]} ></img></div>
          <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][3]} ></img></div>
          <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][4]} ></img></div>
        </Slider>
          <div className='price-inside-img'>${this.state.price_array[i]}</div>
          <div className='panel-card-section'>
            <Link to={`/rooms/${this.state.id_array[i]}`}><p className='img-title'>{this.state.propertyNames[i]}</p></Link>
            <p className='room-type-card-section'>{this.state.room_type_array[i]} {this.state.star_rating[i]}</p>
          </div>
        </div>
        arrOfSliders.push(slider);
      }
    }

    return (
      <div>
        <main className='container-search'>
          <div className='cards-container col-xs-12'>
            <div className='date-panel'>
              <span className='dates-panel-label'>Dates</span>
              <div className='date-picker-container'></div>
            </div>
            <div className='room-panel'>
              <span className='room-types-header hidden-xs'>Room Types</span>
              <div className='checkboxes'>
                <div className='room-type-container'><img className='room-type-icon' src='/assets/icons/house.png' /><div className='room-type-checkbox-section'><label>Entire Home</label><input className='checkbox' id='entireHome' type='checkbox' name='Entire home/apt' value={this.state.entireHome} onChange={this.handleRoomTypes} /></div></div>
                <div className='room-type-container'><img className='room-type-icon' src='/assets/icons/door.png' /><div className='room-type-checkbox-section'><label>Private Room</label><input className='checkbox' id='privateRoom' type='checkbox' name='Private room' value={this.state.privateRoom} onChange={this.handleRoomTypes} /></div></div>
                <div className='room-type-container'><img className='room-type-icon' src='/assets/icons/couch.png' /><div className='room-type-checkbox-section'><label>Shared Room</label><input className='checkbox' id='sharedRoom' type='checkbox' name='Shared room' value={this.state.sharedRoom} onChange={this.handleRoomTypes} /></div></div>
              </div>
            </div>
            <div className='rheostat-container'>
              <span className='rheostat-header'>Price Range</span>
              <Rheostat progressBar={ProgressBar} min={this.state.sliderMin} max={this.state.sliderMax} onValuesUpdated={this.updateValue} values={this.state.values} className='rheostat' />
              <ul className='tempVals'>
                {this.state.values.map((value, i) => (
                  <li className='val' key={i}>
                    ${this.props.formatValue ? this.props.formatValue(value) : value}
                  </li>
                ))}
              </ul>
            </div>
            <div className='arrayOfSliders'>
              {arrOfSliders.map((slider, i) => {
                return (
                  <div key={i}>{slider}</div>
                )
              })}
            </div>
          </div>
          <div className='GMap-canvas hidden-xs' ref="mapCanvas" >  </div>
        </main>
      </div>
    )
  }
}
