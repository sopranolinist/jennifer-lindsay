import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '../../helpers/DataHelper';
import benjeninvite from "../../images/misc/Ben_Jen_Wedding_Save_The_Date.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginBottom: 40,
      maxWidth: 800,
    },
    body: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     textAlign: 'justify'
    },
  }),
);

const containerStyle = {
  width: '300px',
  height: '300px'
};

const center = {
  lat: 33.6936833,
  lng: -117.8896687
};

const Wedding = () => {
  const classes = useStyles();
  const pageTitle = 'Wedding';
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAZ0wtugkHxy1A70eISt4dPCclo6Li6EXk"
  });

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className={classes.root} data-testid="screen-wedding">
      <DocumentTitle title={getPageTitle(pageTitle)} />
      <div className={classes.heading}>
        <Typography variant="h5" gutterBottom component="div">
          ** RSVP <a target="_blank" href="https://forms.gle/Ui3M59s6ddvBRGhK9">here</a> **
        </Typography>
        <img src={benjeninvite} alt="ben jen wedding invite" width="95%" />
      </div>
      <div className={classes.body}>
        <Typography variant="body1" gutterBottom component="div"> 
          Benjamin Alexander Mis and Jennifer Milicent Lindsay are pleased to announce their impending nuptials on October 19th, 2024, at 2pm. 
          The wedding will be a private ceremony at the Old Orange County Courthouse in Santa Ana, followed by a reception at Maggiano's Little Italy from 3:30pm-6:30pm. 
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          Please RSVP for the Reception by filling out <a target="_blank" href="https://forms.gle/Ui3M59s6ddvBRGhK9">this form</a>
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          Maggiano's Little Italy - <a href="https://www.google.com/maps/place/Maggiano's+Little+Italy/@33.6911771,-117.8900237,17z/data=!4m15!1m8!3m7!1s0x80dcdf251e60936f:0x7f89b8fc4d7c8f54!2s3333+Bristol+St,+Costa+Mesa,+CA+92626!3b1!8m2!3d33.6911771!4d-117.8874488!16s%2Fg%2F11c1z2bknq!3m5!1s0x80dcdf2f80af9bfb:0xd689cfcb58ef3cb2!8m2!3d33.6936833!4d-117.8870938!16s%2Fg%2F1tk6w6cr?entry=ttu">3333 Bristol St, Costa Mesa, CA 92626</a>
        </Typography>
        {isLoaded ?
          <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker
            position={{ lat: 33.6936833, lng: -117.8896687 }}
          >
          </Marker>
        </GoogleMap> :  <div>
                          Loading Map...
                        </div>
        }     
      </div>
    </div>
  );
};
export default Wedding;
