import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Card from '../card/Card'
import busi3 from '../../assets/images/tof9.jpg'
import null1 from '../../assets/modes/tof1.jpg'
import ordi1 from '../../assets/informatique/tof6.jpg'
import tel1 from '../../assets/informatique/tof9.jpg'
import chauss1 from '../../assets/chaussures/tof7.jpg'

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
    titre: 'Veste de venise',
    prix: '5000.00 XAF ou 15 Ussd',
    image: busi3
  }
  const Modalite2 = {
    titre: 'Parfum pachini',
    prix: '7000.00 XAF ou 25 Ussd',
    image: null1
  }
  const Modalite3 = {
    titre: 'Laptop core-i7',
    prix: '12000.00 XAF ou 50 Ussd',
    image: ordi1
  }
  const Modalite4 = {
    titre: 'Telephone samsung S21 ultra',
    prix: '9000.00 XAF ou 35 Ussd',
    image: tel1
  }
  const Modalite5 = {
    titre: 'Chaussure dain bleu nuit',
    prix: '4000.00 XAF ou 10 Ussd',
    image: chauss1
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
          <Tab label="Vêtements" {...a11yProps(0)} />
          <Tab label="Beauté" {...a11yProps(1)} />
          <Tab label="informatique" {...a11yProps(2)} />
          <Tab label="Télephones" {...a11yProps(3)} />
          <Tab label="Chaussures" {...a11yProps(4)} />
          <Tab label="Voitures" {...a11yProps(5)} />
          <Tab label="Accessoires" {...a11yProps(6)} />
          <Tab label="Loisirs" {...a11yProps(7)} />
          <Tab label="Meubles" {...a11yProps(8)} />
          <Tab label="Pieces détachés" {...a11yProps(9)} />
        </Tabs>
      </Box>

        <TabPanel value={value} index={0}>
          <Card name={"Nouveaux Vêtements"} Modalite={Modalite1}/>
          <Card name={"Nouveaux Vêtements"} Modalite={Modalite1}/>
          <Card name={"Nouveaux Vêtements"} Modalite={Modalite1}/>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Card name={"Nouveaux produits"} Modalite={Modalite2}/>
          <Card name={"Nouveaux produits"} Modalite={Modalite2}/>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Card name={"Laptop octa-core"} Modalite={Modalite3}/>
          <Card name={"Laptop octa-core"} Modalite={Modalite3}/>
          <Card name={"Laptop octa-core"} Modalite={Modalite3}/>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Card name={"Telephones d'origines"} Modalite={Modalite4}/>
          <Card name={"Telephones d'origines"} Modalite={Modalite4}/>
        </TabPanel>

        <TabPanel value={value} index={4}>
        <Card name={"Chaussures de Marques"} Modalite={Modalite5}/>
        <Card name={"Chaussures de Marques"} Modalite={Modalite5}/>
        <Card name={"Chaussures de Marques"} Modalite={Modalite5}/>
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

    </Box>
  );
}
