import { useState } from 'react';
import { Container, Grid, TextField, Card, CardContent, Typography, Button, Box } from '@mui/material';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
}

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data for demonstration
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Store Manager',
      company: 'Local Supermarket',
      location: 'Downtown',
      salary: '$45,000 - $55,000',
      description: 'Looking for an experienced store manager to oversee daily operations.'
    },
    {
      id: 2,
      title: 'Sales Associate',
      company: 'Fashion Mall',
      location: 'City Center',
      salary: '$30,000 - $35,000',
      description: 'Seeking energetic sales associate for high-end retail store.'
    }
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Search Jobs"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {job.title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {job.company} - {job.location}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Salary: {job.salary}
                </Typography>
                <Typography variant="body2" paragraph>
                  {job.description}
                </Typography>
                <Button variant="contained" color="primary">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Jobs;