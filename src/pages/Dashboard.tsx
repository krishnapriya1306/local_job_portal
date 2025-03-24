import { useState } from 'react';
import { Container, Grid, Paper, Typography, Box, Tabs, Tab } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Paper sx={{ width: '100%' }}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Profile" />
          <Tab label="My Applications" />
          <Tab label="Posted Jobs" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <Typography>Profile Content</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography>Applications Content</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Typography>Posted Jobs Content</Typography>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Dashboard;