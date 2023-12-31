import React, { useState, useEffect } from 'react';
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
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
  bgDeepPurple: {
    backgroundColor: '#836BC9',
    color: 'white',
  },
  bgGreen: {
    backgroundColor: '#5BA566',
    color: 'white',
  },
};

const Edit = () => {
  const { id } = useParams();
  const navigateTo = useNavigate();
  const [student, setStudent] = useState({
    stuname: '',
    email: '',
  });

  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3333/students/${id}`);
        console.log(student.data);
        setStudent(student.data);
      } catch (error) {
        console.log('Something is Wrong');
      }
    }
    getStudent();
  }, [id]);

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
      await axios.put(`http://localhost:3333/students/${id}`, student);
      useNavigate.push('/');
    } catch (error) {
      console.log('Something is Wrong');
    }
  }

  function handleClick() {
    navigateTo('/');
  }

  return (
    <>
      <Box textAlign="center" p={2} style={styles.bgDeepPurple} mb={2}>
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>

      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} style={styles.bgGreen} mb={2}>
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  value={student.stuname}
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
                  value={student.email}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Update
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleClick}>
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
