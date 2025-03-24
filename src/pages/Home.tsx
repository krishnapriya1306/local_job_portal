import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Local Job Portal
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Connecting local businesses with talented individuals
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/jobs"
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Find Jobs
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            size="large"
          >
            Post a Job
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;