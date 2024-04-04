import React,{ReactNode,useState} from 'react'
import { Container,Box } from '@mui/material'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import { SIDEBAR_WIDTH } from '../constants'

function MainContainer({
  children,
  hideHeader = false,
}: {
  children: ReactNode;
  hideHeader?: boolean;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar handleSidebarToggle={handleSidebarToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleSidebarToggle={handleSidebarToggle}
      />
      <Box
        className="dashboard_main mn-lyout"
        component="main"
        sx={{
          marginLeft: "auto",
          width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        }}
      >
        <Container className="sub-layout" sx={{ paddingTop: 13 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
export default MainContainer;
