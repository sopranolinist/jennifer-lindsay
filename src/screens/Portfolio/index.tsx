import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import React from 'react';
import DocumentTitle from 'react-document-title';
import ReactPlayer from 'react-player/lazy';
import { getPageTitle } from '../../helpers/DataHelper';
import avatar from "../../images/photos/JL_Headshot_Tech.jpeg";
// import videoPhoto from "../../images/screenshots/Wondery_App_Splash.jpg"
// import Video from '../../media/Wondery_App_Android_Demo.mp4'
import cosmosDashboardImg from "../../images/screenshots/BF_Cosmos_Dashboard.jpeg"
import cosmosASMImg from "../../images/screenshots/BF_Cosmos_ASM.jpeg"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(6),
    },
    heading: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24
    },
    body: {
     display: 'flex',
     flexDirection: 'column',
     textAlign: 'left'
    },
    avatar: {
      marginLeft: 24,
      width: 120,
      height: 120,
    },
    socialMedia: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    socialMediaLink: {
        display: 'flex',
        alignItems: 'center',
    },
    videoPlayer: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      // width: 240,
      // height: 480,
      marginTop: 20,
      marginBottom: 40
    },
    imgList: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      width: 800, 
      height: 1300
    }
  }),
);

const Portfolio = () => {
  const classes = useStyles();
  const pageTitle = 'Contact';
  return (
    <div className={classes.root} data-testid="screen-home">
      <DocumentTitle title={getPageTitle(pageTitle)} />
      <div className={classes.heading}>
      <Typography variant="h4">Selected Projects</Typography>
      <Avatar 
        alt="Jennifer Lindsay" 
        src={avatar} 
        className={classes.avatar}
         />
      </div>
      <div className={classes.body}>
      <Divider />
        <Typography variant="h5" gutterBottom component="div"> Podcast App | Client: Wondery Podcast Network</Typography>
        <Typography variant="body2" gutterBottom component="div">
          The Wondery Podcast App is a React Native cross-platform mobile application for delivering premium audio content from Wondery Podcast Network's vast collection of original podcast shows. 
          Account and content data are stored in an AWS hosted backend environment, and episode audio files are delivered from various 3rd party podcast distribution services. 
          As the frontend tech lead for the Wondery App, I work closely with the product owner to provide technical guidance for transforming the client's vision into formal, end-to-end requirements. I also oversee all code contributions to the code base, monitor Agile sprint progress, triage urgent customer requests or bug reports, coordinate cross-team efforts with the design, web and backend leads, and contribute to the code base myself. Here's a brief video showcasing some of the app's primary features. 
          Feel free to explore the app yourself by downloading it from the <Link href="https://apps.apple.com/us/app/wondery-premium-podcast-app/id1485913772" underline="hover" target="_blank" rel="noopener">Apple AppStore</Link> or the <Link href="https://play.google.com/store/apps/details?id=com.wondery&hl=en_US&gl=US" underline="hover" target="_blank" rel="noopener">Google Play Store</Link>.
        </Typography>
        <div className={classes.videoPlayer}>
          <ReactPlayer 
            url='Wondery_App_Android_Demo.mp4'
            height='600px'
            width='300px'
            controls={true}
          />
        </div>
        <Divider />
        <Typography variant="h5" gutterBottom component="div"> Cosmos Platform | Client: Bishop Fox</Typography>
        <Typography variant="body2" gutterBottom component="div">
          The <Link href="https://bishopfox.com/platform" underline="hover" target="_blank" rel="noopener">Cosmos Platform</Link> is a React-based web tool built to assist cyber security teams with identifying, validating, and enabling remediation of dangerous leaks and exposures. 
          As the lead frontend developer on this project for Bishop Fox, I helped design requirements for and implement most of the dashboard components and tools, and I also implemented the frontend integration for the client's custom-designed API. Cosmos is a proprietary tool, but here are a few screenshots from its dashboard:
        </Typography>
        <img src={cosmosDashboardImg} alt="Dashboard" />
        <img src={cosmosASMImg} alt="ASM" />
      </div>
    </div>
  );
};
export default Portfolio;
