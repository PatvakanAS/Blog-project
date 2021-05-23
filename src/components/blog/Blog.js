import React from 'react';
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { CardActions, CardContent, Card, CardMedia, Grid, AppBar, Container, Toolbar, IconButton, Typography, Box, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  addNewItemBtn: {
    marginBottom: theme.spacing(5)
  }
}))

const Blog = ({ handleLogOut }) => {
  const [cards, setCards] = useState([1, 2, 3]);

  useEffect(() => {
    console.log(cards)
  }, [cards]);

  const addNewItem = () => {
    setCards(prev => [...prev, ++cards.length]);
  };

  const classes = useStyles();
  const deleteItem = (index = 0) => {
    setCards(prev => prev.filter((item, i) => { return i !== index }));
  };

  return (
    <>
      <AppBar position="relative">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Blog
            </Typography>
            {<Box mr={1}>
              <Button
                type="submit"
                fullWidth
                color="inherit"
                onClick={handleLogOut}
              >
                Log Out
                {/* <AccountCircle /> */}
              </Button>
            </Box>}
          </Toolbar>
        </Container>
      </AppBar>

      <Container className={classes.cardGrid} maxWidth="md">
        <Button size="small" color="primary" onClick={addNewItem} className={classes.addNewItemBtn}>
          Add new blog item
        </Button>
        <Grid container spacing={4}>
          {cards.map((card, index) => (

            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading {index += 1}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                    </Button>
                  <Button size="small" color="secondary" name={'item_' + (index - 1)}
                    onClick={e => deleteItem(parseInt(e?.target?.parentElement?.name.split('_')[1]))}>
                    Delete
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Blog;