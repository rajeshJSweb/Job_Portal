/*eslint-disable*/
import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateJob = async () => {
    try {
      await axios.post(
        "/api/jobs",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      alert("Job created successfully!");
      window.location.href = "/home";
    } catch (error) {
      console.error("Failed to create job:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Create Job
      </Typography>
      <TextField
        label="Job Title"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Job Description"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleCreateJob}>
        Create
      </Button>
    </Container>
  );
};

export default CreateJob;
