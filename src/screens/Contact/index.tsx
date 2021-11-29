import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '../../helpers/DataHelper';
import { LinkedInIcon } from '../../images/Icons';
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
    },
    socialMedia: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
  }),
);

const Contact = () => {
  const classes = useStyles();
  const pageTitle = 'Contact';
  return (
    <div className={classes.root} data-testid="screen-home">
      <DocumentTitle title={getPageTitle(pageTitle)} />
      <div className={classes.heading}>
      <Typography variant="h4">Contact Me</Typography>
      <Avatar 
        alt="Jennifer Lindsay" 
        src={avatar} 
        className={classes.avatar}
         />
      </div>
      <div className={classes.body}>
        <Typography variant="body1" gutterBottom component="div"> Email: jen [at] jenniferlindsay [dot] com</Typography> 
        <Typography variant="body1" gutterBottom component="div" className={classes.socialMedia}>Social Media: 
            <Link href="https://www.linkedin.com/in/jennifermlindsay/" underline="hover" target="_blank" rel="noopener">
                <LinkedInIcon />
            </Link>
        </Typography>
      </div>
    </div>
  );
};
export default Contact;
