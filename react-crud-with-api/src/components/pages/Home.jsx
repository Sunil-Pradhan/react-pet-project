import React from 'react';
import {
  Typography,
  Box,
  Grid,
  // TableContainer,
  // Table,
  // TableBody,
  // TableCell,
  // TableHead,
  // TableRow,
  // Paper,
  // IconButton,
  // Tooltip,
  TextField,
  Button,
} from '@mui/material';

// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Link } from 'react-router-dom';
import List from '../student/List';
import axios from 'axios';
import { useState } from 'react';

const styles = {
  bgDeepPurple: {
    backgroundColor: '#836BC9',
    color: 'white',
  },
  bgGreen: {
    backgroundColor: '#5BA566',
    color: 'white',
  },
  // bgOrange: {
  //   backgroundColor: '#FFA916',
  //   color: 'white',
  // },
};

const Home = () => {
  const [student, setStudent] = useState({
    stuname: '',
    email: '',
  });

  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
    console.log(student);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/students`, student);
      setStatus(true);
    } catch (error) {
      console.log('Something is Wrong');
    }
  }
  if (status) {
    return <Home />;
  }

  return (
    <>
      <Box textAlign="center" style={styles.bgDeepPurple} p={2} mb={2}>
        <Typography variant="h2">React CRUD With API Call</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} style={styles.bgGreen} mb={2}>
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
