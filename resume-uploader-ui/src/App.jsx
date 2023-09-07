// import './App.css';
import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from '@mui/material';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';

function App() {
  //Style for upload button
  const Input = styled('input')({
    display: 'none',
  });
  //states
  const [dob, setDob] = useState('');
  const [region, setRegion] = useState('');
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [joblocation, setJobLocation] = useState([]);
  const [pimage, setPimage] = useState('');
  const [rdoc, setRdoc] = useState('');
  const [error, setError] = useState({
    status: false,
    msg: '',
    type: '',
  });
  //For Region
  const handleChangeregion = (event) => {
    setRegion(event.target.value);
  };

  //Multi Checkbox
  const getJobLocation = (e) => {
    let data = joblocation;
    data.push(e.target.value);
    setJobLocation(data);
  };

  //Clear Form
  const resetForm = () => {
    setName('');
    setEmail('');
    setDob('');
    setRegion('');
    setGender('');
    setJobLocation('');
    setPimage('');
    setRdoc('');
  };

  //Handle Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    // console.log(data);
    data.append('name', name);
    data.append('email', email);
    data.append('dob', dob);
    data.append('region', region);
    data.append('gender', gender);
    data.append('joblocation', joblocation);
    data.append('pimage', pimage);
    data.append('rdoc', rdoc);
    if (name && email) {
      console.log(data);
      console.log(data.get('name'));
      console.log(data.get('email'));
      setError({
        status: true,
        msg: 'Resume Upload Successfully',
        type: 'success',
      });
      resetForm();
			document.getElementById('resume-form').reset()
    } else {
      setError({ status: true, msg: 'All fields are required', type: 'error' });
    }
  };

  return (
    <>
      <CssBaseline>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ backgroundColor: 'error.light', padding: 2 }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{ fontWeight: 'bold', color: 'white' }}
          >
            Resume Uploader
          </Typography>
        </Box>
        <Grid container justifyContent="center">
          <Grid item xs={5}>
            <Box
              component="form"
              sx={{ p: 3 }}
              noValidate
              id="resume-form"
              onSubmit={handleSubmit}
            >
              <TextField
                id="name"
                name="name"
                required
                fullWidth
                margin="normal"
                label="Name"
                onChange={(e) => setName(e.target.value)}
              ></TextField>
              <TextField
                id="email"
                name="email"
                required
                fullWidth
                margin="normal"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
              <Box mt={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    value={dob}
                    onChange={(newValue) => {
                      setDob(newValue);
                    }}
                    slotProps={{ textField: { variant: 'outlined' } }}
                    // renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <FormControl fullWidth margin="normal">
                <InputLabel id="state-select-label">State</InputLabel>
                <Select
                  labelId="region-india"
                  id="region-india"
                  value={region}
                  label="region"
                  onChange={handleChangeregion}
                >
                  <MenuItem value="Assam">Assam</MenuItem>
                  <MenuItem value="Bihar">Bihar</MenuItem>
                  <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <FormLabel id="gender-radio">Gender</FormLabel>
                <RadioGroup row name="gender">
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  Preferred Job Location:
                </FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Delhi"
                    value="Delhi"
                    onChange={(e) => getJobLocation(e)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Bangalore"
                    value="Bangalore"
                    onChange={(e) => getJobLocation(e)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Hyderabad"
                    value="Hyderabad"
                    onChange={(e) => getJobLocation(e)}
                  />
                </FormGroup>
              </FormControl>
              <Stack direction="row" alignItems="center" spacing={4}>
                <label htmlFor="profile-photo">
                  <Input
                    accept="image/*"
                    id="profile-photo"
                    type="file"
                    onChange={(e) => {
                      setPimage(e.target.files[0]);
                    }}
                  />
                  <Button variant="contained" component="span">
                    Upload Photo
                  </Button>
                </label>
                <label htmlFor="resume-file">
                  <Input
                    accept="doc/*"
                    id="resume-file"
                    type="file"
                    onChange={(e) => {
                      setRdoc(e.target.files[0]);
                    }}
                  />
                  <Button variant="contained" component="span">
                    Upload File
                  </Button>
                </label>
              </Stack>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
                color="error"
              >
                Submit
              </Button>
              {error.status ? (
                <Alert severity={error.type}>{error.msg}</Alert>
              ) : (
                ''
              )}
            </Box>
          </Grid>

          <Grid item xs={7}>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ backgroundColor: 'info.light', padding: 1 }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: 'blod', color: 'white' }}
              >
                List of Candidates
              </Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="resume table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">DOB</TableCell>
                    <TableCell align="center">State</TableCell>
                    <TableCell align="center">Gender</TableCell>
                    <TableCell align="center">Location</TableCell>
                    <TableCell align="center">Avatar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">Sonam</TableCell>
                    <TableCell align="center">sonam@gmail.com</TableCell>
                    <TableCell align="center">20/10/1995</TableCell>
                    <TableCell align="center">Bihar</TableCell>
                    <TableCell align="center">Female</TableCell>
                    <TableCell align="center">Delhi</TableCell>
                    <TableCell align="center">
                      <Avatar src="#" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
}

export default App;
