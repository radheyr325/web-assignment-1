import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select"

function Copyright(props) {
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/#">
          SolarX
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}






const theme = createTheme();

export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [fans, setFans] = React.useState('');

  const handleChangefans = (event: SelectChangeEvent) => {
    setFans(event.target.value);
  };

  const [tvs, setTvs] = React.useState('');

  const handleChangetvs = (event: SelectChangeEvent) => {
    setTvs(event.target.value);
  };
  
  const [heaters, setHeaters] = React.useState('');

  const handleChangeheaters = (event: SelectChangeEvent) => {
    setHeaters(event.target.value);
  };
  const [refrigators, setrefrigators] = React.useState('');

  const handleChangerefrigators = (event: SelectChangeEvent) => {
    setrefrigators(event.target.value);
  };

  const [other, setOther] = React.useState('');

  const handleChangeother = (event: SelectChangeEvent) => {
    setOther(event.target.value);
  };
  return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <div align="center">
            <img src="solarx-logo.webp" alt="Girl in a jacket" width="126" height="100"/>
          </div>
          <CssBaseline />
          <Box
              sx={{
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >

            <Typography component="h1" variant="h5">
              Predict Your Yearly Bill
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

              <Grid container spacing={2}>
                <Grid>
                  <Typography align="center" component="h6" variant="h5">
                    <h5>Enter details of the appliances present in your house.</h5>
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={5} sx={{marginTop:2}}>
                  Number of Fans
                </Grid>
                <Grid item xs={12} sm={7}>
                  <FormControl fullWidth>
                    <InputLabel id="select-fans"  >Fans</InputLabel>
                    <Select
                        fullWidth
                        label="Fans"
                        labelId="select-fans"
                        id="select-fans"
                        value={fans}

                        onChange={handleChangefans}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={"more"}>7+</MenuItem>
                    </Select></FormControl>
                </Grid>

                <Grid item xs={12} sm={5} sx={{marginTop:2}}>
                  Number of Tvs
                </Grid>
                <Grid item xs={12} sm={7} >
                  <FormControl fullWidth>
                  <InputLabel id="select-tvs">Tvs</InputLabel>
                  <Select
                      fullWidth
                      label="Tvs"
                      labelId="select-tvs"
                      id="select-tvs"
                      value={tvs}

                      onChange={handleChangetvs}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={"more"}>3+</MenuItem>
                  </Select></FormControl>
                </Grid>

                <Grid item xs={12} sm={5} sx={{marginTop:2}}>
                  Number of Heaters
                </Grid>
                <Grid item xs={12} sm={7} >
                  <FormControl fullWidth>
                    <InputLabel id="select-heaters">Heaters</InputLabel>
                    <Select
                        fullWidth
                        label="Heaters"
                        labelId="select-heaters"
                        id="select-heaters"
                        value={heaters}

                        onChange={handleChangeheaters}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={"more"}>more than 1</MenuItem>
                    </Select></FormControl>
                </Grid>

                <Grid item xs={12} sm={5} sx={{marginTop:2}}>
                  Refrigerators
                </Grid>
                <Grid item xs={12} sm={7} >
                  <FormControl fullWidth>
                    <InputLabel id="select-refrigators">Refrigerator</InputLabel>
                    <Select
                        fullWidth
                        label="refrigators"
                        labelId="select-refrigators"
                        id="select-refrigators"
                        value={refrigators}

                        onChange={handleChangerefrigators}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={"more"}>2+</MenuItem>
                    </Select></FormControl>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <FormControl fullWidth>
                    <InputLabel id="select-other">Other Devices</InputLabel>
                    <Select
                        fullWidth
                        label="Other"
                        labelId="select-other"
                        id="select-other"
                        value={other}

                        onChange={handleChangeother}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={"more"}>7+</MenuItem>
                    </Select></FormControl>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <TextField
                      autoComplete="Power Consumed(KWh)"
                      name="powerconsume"
                      required
                      fullWidth
                      id="powerconsume"
                      label="Power Consumed(KWh)"
                      autoFocus
                  />
                </Grid>
              </Grid>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
              >
                Predict the Cost of Electricity
              </Button>
              {/*Your yearly bill would be $648*/}
              {/*<TextField*/}
              {/*    sx={{mx:11, alignItems:"center"}}*/}
              {/*    disabled*/}
              {/*    id="filled-disabled"*/}
              {/*    label="Disabled"*/}
              {/*    defaultValue="Your yearly bill would be $648"*/}
              {/*    variant="filled"*/}
              {/*/>*/}
              <center>Your yearly bill would be $648</center>
              <Grid container justifyContent="flex-end">
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
  );
}