import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import Card from '../card/Card'
import busi3 from '../../assets/images/tof9.jpg'
import null1 from '../../assets/modes/tof1.jpg'
import ordi1 from '../../assets/informatique/tof6.jpg'
import tel1 from '../../assets/informatique/tof9.jpg'
import chauss1 from '../../assets/chaussures/tof7.jpg'


const checkDate=(date)=>{
	let week=588000000 // une semaine en milisecondes
	return (+new Date)-(+new Date(date))>week
}

function TabPanel({ children, value, index, ...props }) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



function a11yProps(index) {credits
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
	const [items, setItems]=useState({ new: [], old: []})
	const [value, setValue] = useState(0);
	useLayoutEffect(() => {
		getItems()
	}, [])

	const getItems=()=>{
        fetch('https://superkap-admin.herokuapp.com/categories/5.json')
            .then(response=>response.json()).then(data=>{
				console.log("les data ", data)
				parseItems(data)
            })
            .catch(error=>{
                console.log("une erreur est survenue ", error)
            })
		}
	const Cats=["Vêtements", "Beauté", "informatique", "Télephones", "Chaussures",
		"Voitures", "Accessoires", "Loisirs","Meubles", "Pieces détaché" ]

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}
	const parseItems=(items)=>{
		console.log("parse item ", items)
		let tab1=[], tab2=[]
		items.forEach(item => {
			if(checkDate(item.created_at)) tab1.push({...item, image: busi3})
			else tab2.push({...item, image: busi3})
		});
		setItems({new: tab1, old: tab2})
	}

  console.log("the items ", items)

  return (
    <Box sx={{ maxWidth: '100%' , bgcolor: 'background.paper' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} aria-label="basic tabs example"  variant="scrollable" aria-label="scrollable force tabs example"
            onChange={handleChange}  scrollButtons allowScrollButtonsMobile
        >
          { Cats.map((cat, i)=><Tab label={cat} {...a11yProps(i)} key={`cat${i}`} />) }
        </Tabs>
      </Box>

        <TabPanel value={value} index={0}>
			{  items.old.length ?  <><Card name={"Nouveaux Vêtements"} Modalite={items.new} />
			<Card name={"Anciens Vetements"} Modalite={items.old} /></> : <></> }
          
        </TabPanel>

        <TabPanel value={value} index={1}>
          {/* <Card name={"Nouveaux produits"} Modalite={modality[1]}/>
          <Card name={"Nouveaux produits"} Modalite={modality[1]}/> */}
        </TabPanel>

        <TabPanel value={value} index={2}>
          {/* <Card name={"Laptop octa-core"} Modalite={modality[2]}/>
          <Card name={"Laptop octa-core"} Modalite={modality[2]}/>
          <Card name={"Laptop octa-core"} Modalite={modality[2]}/> */}
        </TabPanel>

        <TabPanel value={value} index={3}>
          {/* <Card name={"Telephones d'origines"} Modalite={modality[3]}/>
          <Card name={"Telephones d'origines"} Modalite={modality[3]}/> */}
        </TabPanel>

        <TabPanel value={value} index={4}>
        {/* <Card name={"Chaussures de Marques"} Modalite={modality[4]}/>
        <Card name={"Chaussures de Marques"} Modalite={modality[4]}/>
        <Card name={"Chaussures de Marques"} Modalite={modality[4]}/> */}
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

const modality=[
  {
    titre: 'Veste de venise',
    prix: '5000.00 XAF ou 15 Ussd',
    image: busi3
  },
  {
    titre: 'Parfum pachini',
    prix: '7000.00 XAF ou 25 Ussd',
    image: null1
  },
  {
    titre: 'Laptop core-i7',
    prix: '12000.00 XAF ou 50 Ussd',
    image: ordi1
  },
  {
    titre: 'Telephone samsung S21 ultra',
    prix: '9000.00 XAF ou 35 Ussd',
    image: tel1
  },
  {
    titre: 'Chaussure dain bleu nuit',
    prix: '4000.00 XAF ou 10 Ussd',
    image: chauss1
  }
]
