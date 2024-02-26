import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import React from 'react';
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
      flexDirection: 'row',
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

const Wedding = () => {
  const classes = useStyles();
  const pageTitle = 'Wedding';
  return (
    <div className={classes.root} data-testid="screen-wedding">
      <DocumentTitle title={getPageTitle(pageTitle)} />
      <div className={classes.heading}>
        <img src={benjeninvite} alt="ben jen wedding invite" width="95%" />
      </div>
      <div className={classes.body}>
        <Typography variant="body1" gutterBottom component="div"> 
          Benjamin Alexander Mis and Jennifer Milicent Lindsay are pleased to announce their impending nuptials on October 19th, 2024, at 2pm. 
          The wedding will be held at the Old Orange County Courthouse in Santa Ana, followed by a reception nearby. 
          Further details forthcoming this summer, in the meantime please save the date to celebrate with us! 
        </Typography>
      </div>
    </div>
  );
};
export default Wedding;
