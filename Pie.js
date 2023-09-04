import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { Pie } from "react-chartjs-2";

// Mock data
const userData = {
  name: "John Doe",
  title: "Sales Representative",
  contact: {
    email: "john@example.com",
    phone: "123-456-7890",
  },
};

const pendingTasks = [
  { taskName: "Task 1", dueDate: "2023-09-30", clientName: "Client A", priority: "High" },
  // Add more pending tasks
];

const completedTasks = [
  { taskName: "Task 2", completionDate: "2023-08-15", clientName: "Client B", outcome: "Closed" },
  // Add more completed tasks
];

const UserProfile = () => {
  const pendingData = {
    labels: ["Pending", "Completed"],
    datasets: [
      {
        data: [pendingTasks.length, completedTasks.length],
        backgroundColor: ["#FF5733", "#36A2EB"],
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">User Information</Typography>
            <Typography>Name: {userData.name}</Typography>
            <Typography>Title: {userData.title}</Typography>
            <Typography>Email: {userData.contact.email}</Typography>
            <Typography>Phone: {userData.contact.phone}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Task Lists</Typography>
            <Paper elevation={0}>
              <Typography variant="subtitle1">Pending Tasks</Typography>
              <ul>
                {pendingTasks.map((task, index) => (
                  <li key={index}>
                    {task.taskName} - Due: {task.dueDate}
                  </li>
                ))}
              </ul>
            </Paper>
            <Paper elevation={0}>
              <Typography variant="subtitle1">Completed Tasks</Typography>
              <ul>
                {completedTasks.map((task, index) => (
                  <li key={index}>
                    {task.taskName} - Completion Date: {task.completionDate}
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="h6" style={{ marginTop: "16px" }}>
        Pie Chart
      </Typography>
      <Pie data={pendingData} />
    </Container>
  );
};

export default UserProfile;
