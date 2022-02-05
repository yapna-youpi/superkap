import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Card from '../card/Card'
import busi1 from '../../assets/images/tof3.jpg'
import busi2 from '../../assets/images/tof8.jpg'
import busi3 from '../../assets/images/tof9.jpg'
import busi4 from '../../assets/images/tof2.jpg'

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

  const Modalite1 = {
    titre: 'Chaine de venise',
    prix: '5000.00 XAF ou 15 Ussd',
    image: busi1
  }
  const Modalite2 = {
    titre: 'chemise pachini',
    prix: '7000.00 XAF ou 25 Ussd',
    image: busi2
  }
  const Modalite3 = {
    titre: 'Chaine de venise',
    prix: '12000.00 XAF ou 50 Ussd',
    image: busi3
  }
  const Modalite4 = {
    titre: 'Chaine de venise',
    prix: '9000.00 XAF ou 35 Ussd',
    image: busi4
  }


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
          <Card name={"Produits de Beauté"} Modalite={Modalite1}/>
          <Card name={"Produits de Beauté"} Modalite={Modalite1}/>
          <Card name={"Produits de Beauté"} Modalite={Modalite1}/>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Card name={"Nouveaux produits"} Modalite={Modalite2}/>
          <Card name={"Nouveaux produits"} Modalite={Modalite2}/>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Card name={"Produits de Maion"} Modalite={Modalite3}/>
          <Card name={"Produits de Maion"} Modalite={Modalite3}/>
          <Card name={"Produits de Maion"} Modalite={Modalite3}/>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Card name={"produits d'entretien"} Modalite={Modalite4}/>
          <Card name={"produits d'entretien"} Modalite={Modalite4}/>
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
