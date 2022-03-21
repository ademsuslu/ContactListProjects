import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Form from "./Form"
// tablo 
import { ContactList } from "./ContactList"
import CreateContact from './CreateContact';
import { ListItemText } from '@mui/material';

const drawerWidth = 200;
const Sidebar = () => {
    const [rows, setRows] = useState([])
    
    const menuItems=[
        {text:"All Contact",
        path:"/"},
        {text:"Started Contact",
        path:"/StartedContact"},
]
    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        marginTop: "2rem",
                     
                    },
                }}
                variant="permanent"
                anchor="left"
                >
                <Toolbar />
                <Divider />
                {/* modal start */}
                <CreateContact rows={rows} />
                {/* modal end */}
                <List sx={   {backgroundColor: "#0cb7e2"}}>
                    {menuItems.map((item)=>(<ListItem sx={   {margin: "1rem"}} key={item.text} button>
                         <ListItemText sx={   {color: "white"}} primary={item.text} ></ListItemText> </ListItem>))}
                </List>
                <Divider />
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <ContactList />
            </Box>
        </Box>
    
    );
}



export default Sidebar
