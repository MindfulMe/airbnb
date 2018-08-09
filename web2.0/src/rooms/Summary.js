import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from 'material-ui/svg-icons/action/home';
import People from 'material-ui/svg-icons/social/people-outline';
import Contacts from 'material-ui/svg-icons/communication/contacts';
import Bed from 'material-ui/svg-icons/notification/airline-seat-individual-suite';
import axios from 'axios';
require('./rooms.component.css');


class Summary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listing: {
        city: null,
        state: null,
        country: null,
        name: null,
        picture_url: null,
        user: {
          id: null,
        },
        hosts: [{
          picture_url: null,
        }],
        bedrooms: null,
        beds: null,
        person_capacity: null,
        reviews_count: null,
        room_type: null,
      }
    }
    axios.get(`/listingInfo/${this.props.rid}`).then(hostInfo => {

      console.log("hostInfo: ", hostInfo)

      this.setState({
        listing: {
          city: hostInfo.data.listing.city,
          state: hostInfo.data.listing.state,
          country: hostInfo.data.listing.country,
          name: hostInfo.data.listing.name,
          picture_url: hostInfo.data.listing.picture_url,
          user: {
            id: hostInfo.data.listing.id,
          },
          hosts: hostInfo.data.listing.hosts,
          bedrooms: hostInfo.data.listing.bedrooms,
          beds: hostInfo.data.listing.beds,
          person_capacity: hostInfo.data.listing.person_capacity,
          reviews_count: hostInfo.data.listing.reviews_count,
          room_type: hostInfo.data.listing.room_type,
        }
      })
    }).catch(function (error) {
      console.log(error); // Network Error
      console.log(error.status); // undefined
      console.log(error.code); // undefined
    });
  }


  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#fff", paddingTop: "25px", paddingBottom: "25px", borderBottom: 'solid 1px #DCE0E0' }} className="row about-body">
          <div className="col-xs-12 col-sm-4" style={{ paddingBottom: "25px" }}>
            <img className="center-block" style={{ borderRadius: '100%', height: '85px', width: '85px' }} src={this.state.listing !== undefined && this.state.listing.hosts[0].picture_url} />
            <div style={{ textAlign: "center", fontSize: '13px', color: '#767676', paddingTop: '5px' }} className="hidden-xs">{this.state.listing.hosts[0].first_name}</div>
          </div>

          <div className="col-xs-12 col-sm-8">
            <div className="cnt-sm-left-md" style={{ fontSize: '19px', letterSpacing: '1px' }}> {this.state.listing !== undefined && this.state.listing.name}</div>
            <div className="cnt-sm-left-md" style={{ fontSize: '11px', color: '#767676', letterSpacing: '1px', marginTop: "5px", marginBottom: "5px" }}>{this.state.listing !== undefined && this.state.listing.city} {this.state.listing.state} {this.state.listing.country}</div>
          </div>


          <span>
            <MuiThemeProvider>
              <div className="placetype-icon">
                <div style={{ fontSize: '13px', color: '#767676' }} className="col-xs-3 col-sm-2 cnt-sm-left-md"  >
                  <Home style={{ color: '#767676' }} />
                  <div>{this.state.listing !== undefined && this.state.listing.room_type}</div>
                </div>
                <div style={{ fontSize: '13px', color: '#767676' }} className="col-xs-3 col-sm-2 cnt-sm-left-md"  >
                  <People style={{ color: '#767676' }} />
                  {(this.state.listing !== undefined && this.state.listing.person_capacity === 1)
                    ? <div>{this.state.listing !== undefined && this.state.listing.person_capacity} guest</div>
                    : <div>{this.state.listing !== undefined && this.state.listing.person_capacity} guests</div>
                  }
                </div>
                <div style={{ fontSize: '13px', color: '#767676' }} className="col-xs-3 col-sm-2 cnt-sm-left-md"  >
                  <Contacts style={{ color: '#767676' }} />
                  {(this.state.listing !== undefined && this.state.listing.bedrooms === 1)
                    ? <div>{this.state.listing !== undefined && this.state.listing.bedrooms} bedroom</div>
                    : <div>{this.state.listing !== undefined && this.state.listing.bedrooms} bedrooms</div>
                  }
                </div>
                <div style={{ fontSize: '13px', color: '#767676' }} className="col-xs-3 col-sm-2 cnt-sm-left-md"  >
                  <Bed style={{ color: '#767676' }} />
                  {(this.state.listing !== undefined && this.state.listing.beds === 1)
                    ? <div>{this.state.listing !== undefined && this.state.listing.beds} bed</div>
                    : <div>{this.state.listing !== undefined && this.state.listing.beds} beds</div>
                  }
                </div>
              </div>
            </MuiThemeProvider>
          </span>
        </div>
      </div>
    );
  }
}

export default Summary;
