import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


 //{*const Dashboard = (props) =>{
   // return(
     //   <div><h2>Hello</h2>
       // </div>
    //)
/*}
export default Dashboard*/
const useStyles = makeStyles({
    root: {
        width: 800,
        maxWidth: 345,
    },
  });

export default function ImgMediaCard() {
  const classes = useStyles();

    const handleClickApple = (letter) => {
        if (letter === "A") {
            console.log("correct");
            alert("Correct");
        } else {
            console.log("wrong");
            alert("Wrong");
        }
    };
    const handleClickOrange = (letter) => {
        if (letter === "O") {
            console.log("correct");
            alert("Correct");
        } else {
            console.log("wrong");
            alert("Wrong");
        }
    };
    const handleClickAvocado = (letter) => {
        if (letter === "A") {
            console.log("correct");
            alert("Correct");
        } else {
            console.log("wrong");
            alert("Wrong");
        }
    };
  return (
      <div className="mycard">
           <Typography  variant="h2" color="secondary">Hello, let's start the game!
            </Typography>
       
          <Grid container
            justify="space-evenly"
            alignItems="center"
            >
            <Grid item xs={4}>
            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="apple"
                height="140"
                image="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60"
                title="apple"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Apple
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Select the first vowel of the word Apple
            </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={function(){handleClickApple("A")}} Button variant="contained" color="secondary">A</Button>
                <Button onClick={function(){handleClickApple("O")}} Button variant="contained" color="secondary">O</Button>
                <Button onClick={function(){handleClickApple("U")}} Button variant="contained" color="secondary">U</Button>
            </CardActions>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="orange"
                height="140"
                image="https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG9yYW5nZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                title="orange"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Orange
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Select the first vowel of the word Orange
            </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={function(){handleClickOrange("A")}} Button variant="contained" color="secondary">A</Button>
                <Button onClick={function(){handleClickOrange("O")}} Button variant="contained" color="secondary">O</Button>
                <Button onClick={function(){handleClickOrange("U")}} Button variant="contained" color="secondary">U</Button>
            </CardActions>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="avocado"
                height="140"
                image="https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2Fkb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                title="avocado"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Avocado
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Select the first vowel of the word Avocado
            </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={function(){handleClickAvocado("A")}} Button variant="contained" color="secondary">A</Button>
                <Button onClick={function(){handleClickAvocado("O")}} Button variant="contained" color="secondary">O</Button>
                <Button onClick={function(){handleClickAvocado("U")}} Button variant="contained" color="secondary">U</Button>
            </CardActions>
            </Card>
            </Grid>
        </Grid>
    </div>

   
  );
}
