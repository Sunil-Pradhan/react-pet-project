import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
  bgOrange: {
    backgroundColor: '#FFA916',
    color: 'white',
  },
};

const View = () => {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  //console.log(id);

  const navigateTo = useNavigate();

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

  function handleClick() {
    navigateTo('/');
  }

  return (
    <>
      <Box textAlign="center" p={2} style={styles.bgOrange}>
        <Typography variant="h4">Student Detail</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#616161' }}>
              <TableCell align="center" style={{ color: '#ffffff' }}>
                ID
              </TableCell>
              <TableCell align="center" style={{ color: '#ffffff' }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ color: '#ffffff' }}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{student.id}</TableCell>
              <TableCell align="center">{student.stuname}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Back to Home
        </Button>
      </Box>
    </>
  );
};

export default View;
