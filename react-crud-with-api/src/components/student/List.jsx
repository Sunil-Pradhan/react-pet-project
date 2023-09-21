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
  IconButton,
  Tooltip,
} from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const styles = {
  // bgDeepPurple: {
  //   backgroundColor: '#836BC9',
  //   color: 'white',
  // },
  // bgGreen: {
  //   backgroundColor: '#5BA566',
  //   color: 'white',
  // },
  bgOrange: {
    backgroundColor: '#FFA916',
    color: 'white',
  },
};

const List = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get('http://localhost:3333/students');
        // console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log('Something is Wrong');
      }
    }
    getAllStudent();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3333/students/${id}`);
    var newstudent = students.filter((item) => {
      return item.id !== id;
    });
    setStudents(newstudent);
  };

  return (
    <>
      <Box textAlign="center" p={2} style={styles.bgOrange}>
        <Typography variant="h4">Student List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#616161', color: '#ffffff' }}>
              <TableCell align="center" style={{ color: '#ffffff' }}>
                No
              </TableCell>
              <TableCell align="center" style={{ color: '#ffffff' }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ color: '#ffffff' }}>
                Email
              </TableCell>
              <TableCell align="center" style={{ color: '#ffffff' }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{student.stuname}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="view">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <VisibilityIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <EditIcon />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(student.id)}>
                        {/* <Link to="/edit/1"> */}
                          <DeleteIcon color="secondary" />
                        {/* </Link> */}
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
