import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '../../helpers/DataHelper';
import avatar from "../../images/photos/JL_Headshot_Tech.jpeg";

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
    }
  }),
);

const Home = () => {
  const classes = useStyles();
  const pageTitle = 'Home';
  return (
    <div className={classes.root} data-testid="screen-home">
      <DocumentTitle title={getPageTitle(pageTitle)} />
      <div className={classes.heading}>
      <Typography variant="h4">Hi, my name is Jennifer Lindsay</Typography>
      <Avatar 
        alt="Jennifer Lindsay" 
        src={avatar} 
        className={classes.avatar}
         />
      </div>
      <div className={classes.body}>
      <Typography variant="body2" gutterBottom component="div"> 
        I'm a software engineer and tech lead specializing in React Native cross-platform mobile application development and React web development. 
        Currently, I work remotely as a Senior Software Engineering Lead at <Link href="https://diamond.la" underline="hover" target="_blank" rel="noopener">Diamond Web Services</Link>, where I head up a team of React Native developers that maintains and adds new features to the <Link href="https://apps.apple.com/us/app/wondery-premium-podcast-app/id1485913772" underline="hover" target="_blank" rel="noopener">Wondery</Link> <Link href="https://play.google.com/store/apps/details?id=com.wondery&hl=en_US&gl=US" underline="hover" target="_blank" rel="noopener">App</Link>, which provides an exclusive listening experience for fans of <Link href="https://wondery.com" underline="hover" target="_blank" rel="noopener">Wondery Podcast Network</Link> shows. 
        (I suggest checking out <Link href="https://wondery.com/shows/dr-death/" underline="hover" target="_blank" rel="noopener">Dr Death</Link> if you're a fan of true crime.)
        My responsibilities also include technical business analysis, coordinating release activities for client projects, managing Agile sprints, and refining feature requests into actionable requirements. 
        I am proficient in JavaScript, React, React Native and English, and I am working to improve my proficiency in Python and French. I also have experience with Jira and AWS Cloud Services, including Cognito, DynamoDB, and AppSync GraphQL.
      </Typography>
      <Typography variant="body2" gutterBottom component="div"> 
        For the better part of the last decade, I have also been a freelance opera singer based primarily in the greater Los Angeles area. 
        Most recently I was a member of the Metropolitan Opera Extra Chorus, where I was privileged to sing 30 performances at Lincoln Center in their Grammy-winning production of George Gershwin's <i>Porgy and Bess</i>. 
        I was extremely honored to receive an official Grammy Certificate with my name on it as a result of my contribution to the cast album, which won Best Opera Recording at the 2020 awards ceremony.
        If you'd like to know more about my operatic side, feel free to visit my <Link href="https://jenniferlindsaymusic.com" underline="hover" target="_blank" rel="noopener">{'music website'}</Link>.
      </Typography>
      <Typography variant="body2" gutterBottom component="div"> It has been absolutely incredible having two very different simultaneous careers for so many years. However during the pandemic, when most musical performances were put on hold, I found web and app development slowly becoming my primary focus. 
        I have enjoyed the management opportunities I've been afforded at DWS, and I hope to continue to grow my leadership skills for many years to come.         
      </Typography>
      <Typography variant="body2" gutterBottom component="div"> 
        I'm currently based in Orange County, CA, not far from where I grew up. 
        (No, we don't call it "The O.C." Yes, we do say "behind the Orange Curtain.") 
        In my spare time, I like to sew historical costumes and compete with my friends on Duolingo to see who can get the most XP each week. 
        I also enjoy working up a sweat, whether by hiking the local trails or with the Supernatural app on my Oculus Quest VR headset, even though exercise makes my hair extremely frizzy :)
      </Typography>
      </div>
    </div>
  );
};
export default Home;
