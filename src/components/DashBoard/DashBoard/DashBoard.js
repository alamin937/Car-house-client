import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import UseAuth from '../../../UseHooks/UseAuth';
import AddAdmin from '../AddAdmin/AddAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';
  

const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {logOut, admin} = UseAuth();

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:'black', height:'100%'}}>
      <Toolbar />

      <Divider />
     <Box style={{textAlign:'right', marginRight:'30px', color:'white'}} sx={{mt:5}}>
      <NavLink style={{textDecoration:'none', color:'white'}} to='/explore'><Button color="inherit">Show Cars</Button></NavLink> <br />
      <NavLink style={{textDecoration:'none', color:'white'}} to={`${url}`}><Button color="inherit">My Order</Button></NavLink><br />
      <NavLink style={{textDecoration:'none', color:'white'}} to={`${url}/pay`}><Button color="inherit">Pay</Button></NavLink><br />
      <NavLink style={{textDecoration:'none', color:'white'}} to={`${url}/review`}><Button color="inherit">Review</Button></NavLink> <br />
      { admin && <Box>
        <NavLink style={{textDecoration:'none', color:'white'}} to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></NavLink> <br />
      <NavLink style={{textDecoration:'none', color:'white'}} to={`${url}/manageorders`}><Button color="inherit">Manage All Orders</Button></NavLink> <br />
      <NavLink style={{textDecoration:'none', color:'white'}} to={`${url}/addproduct`}><Button color="inherit">Add Product</Button></NavLink>
      <NavLink style={{textDecoration:'none', color:'white'}} to={`${url}/manageproduct`}><Button color="inherit">Manage Product</Button></NavLink>
      </Box> }<br />
      <Button variant='contained' onClick={logOut}>Log Out</Button>
     </Box>
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
   <div >
      <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{backgroundColor:'#667373'}}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box 
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       
        <Switch>
        <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <Route path={`${path}/makeadmin`}>
          <AddAdmin />
        </Route>
        <Route path={`${path}/manageorders`}>
          <ManageOrders />
        </Route>
        <Route path={`${path}/addproduct`}>
          <AddProducts />
        </Route>
        <Route path={`${path}/manageproduct`}>
          <ManageProducts />
        </Route>
      </Switch>

      </Box>
    </Box>
   </div>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
