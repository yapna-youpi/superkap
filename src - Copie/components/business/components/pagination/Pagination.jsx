import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '../../card/Card'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: '100%' , bgcolor: 'background.paper' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} aria-label="basic tabs example"  variant="scrollable" aria-label="scrollable force tabs example"
              onChange={handleChange}
              scrollButtons
              allowScrollButtonsMobile>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Three" {...a11yProps(3)} />
          <Tab label="Item Three" {...a11yProps(4)} />
          <Tab label="Item Three" {...a11yProps(5)} />
          <Tab label="Item Three" {...a11yProps(6)} />
          <Tab label="Item Three" {...a11yProps(7)} />
          <Tab label="Item Three" {...a11yProps(8)} />
          <Tab label="Item Three" {...a11yProps(9)} />
          <Tab label="Item Three" {...a11yProps(10)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Card name={"Produits de Beauté"} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card name={"Nouveaux produits"}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card name={"Produits de Maion"}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Card name={"produits d'entretien"}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item 11
      </TabPanel>
    </Box>
  );
}
