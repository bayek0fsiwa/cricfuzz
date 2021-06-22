import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
// eslint-disable-next-line
// import crickFuzz from '../api/crickFuzz';



const useStyles = makeStyles({
  root: {
    minWidth: 250,
    // maxWidth: 500,
    margin: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const matchUrl = "https://www.cricbuzz.com/live-cricket-scores/35607/ind-vs-nz-final-icc-world-test-championship-final-2021";
  const baseUrl = "https://cricket-api.vercel.app/cri.php?url=" + matchUrl;
  const [score, setscore] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(baseUrl)
      console.log(result);
      setscore(result.data.livescore)
    }
    fetchData();
  }, [])

  // const renderScore = () => {
  //   return livescore.map(el => {
  //     const title = el.title;
  //   })
  // }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Render title Here
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">See More</Button>
      </CardActions>
    </Card>
  );
}
