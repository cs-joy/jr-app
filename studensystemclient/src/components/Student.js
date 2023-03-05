import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      //width: '25ch',
    },
  },
}));

export default function Student() {
  const classes = useStyles();
  const paperStyle = {margin: '20px auto', padding: '50px 20px', width: 600};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [students, setStudents] = useState([])

  const handleClick=(e)=> {
    e.preventDefault()
    const student = {name, email}
    console.log(student)

    fetch("http://localhost:8089/student/save", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(student)
    }).then(()=>{
        console.log("New student has been saved now!");
    })
  }

  useEffect(()=> {
    fetch("http://localhost:8089/student/show")
    .then(res=>res.json())
    .then(result=> {
        setStudents(result);
    })
  }, [])

  return (
      <Container>
          <Paper elevation={3} style={paperStyle}>
              <h1 style={{color: "red"}}><u>Save Student</u></h1>
              <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Name" variant="outlined" 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  />
                  <TextField id="outlined-basic" label="Email" variant="outlined"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  />
              </form>
              <Button variant="contained" color="secondary" onClick={handleClick}>
                Submit
              </Button>
          </Paper>

          <h1>Student List</h1>
          <Paper elevation={3} style={paperStyle}>
            {students.map(student=>(
            <Paper elevation={6} style={{margin: "10px", padding: "15px", textAlign: "left"}} key={student.id}>
                Id: {student.id}<br />
                Name: {student.name} <br />
                Email: {student.email}
            </Paper>
            ))}
          </Paper>

      </Container>
  );
}
