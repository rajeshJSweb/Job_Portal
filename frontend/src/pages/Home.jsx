/*eslint-disable*/
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('/api/jobs', {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      });
      setJobs(response.data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>Job Listings</Typography>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{job.title}</Typography>
                <Typography>{job.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" href="/create-job">
        Create Job
      </Button>
    </Container>
  );
};

export default Home;
