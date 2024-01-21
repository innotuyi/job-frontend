import React from 'react'
import Nav from './Nav'
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Statistics from './Statistics'
function Dashboard() {
    return (
        <>
          {/* <Nav/>   */}
          <div class="container-fluid pt-2">
            <div class="row">
              <Sidebar />
    
              <Statistics/>
            </div>
          </div>
            </>
      );
}

export default Dashboard