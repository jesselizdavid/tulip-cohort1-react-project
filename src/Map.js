import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />}
  </GoogleMap>
))
    return(
       <div>
         <MyMapComponent
           isMarkerShown
           containerElement={ <div style={{ height: `1000px`, width: '1000px' }} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
           loadingElement={<div style={{ height: `100%` }} />}
           googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLAnCM92Dvu2M2NvMHrDSVrg82yFHMKSs"
         />
       </div>
    );
    }
};
export default Map;