import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const Login = (props) => {
  const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(15),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    errorMsg: {
      color: "red",
      margin: 0,
      alignSelf: "start"
    }
  }));
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid className={classes.paper} align="center">
      <Typography variant="h6" color="textSecondary" variant="h5" className={classes.title}>
        {hasAccount ? (
          <>
              Sign In
          </>
        ) : (
          <>
              Sign Up
          </>
        )}
      </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p className={classes.errorMsg}>{emailError}</p>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <p className={classes.errorMsg}>{passwordError}</p>

        {hasAccount ? (
          <>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Sign In
                </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => setHasAccount(!hasAccount)}>
                  {"Don't have an account ? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignUp}
            >
              Sign Up
                </Button>
            <Grid container>
              <Grid item>
                <Link href="" variant="body2" onClick={() => setHasAccount(!hasAccount)}>
                  {"Have an account ? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default Login;