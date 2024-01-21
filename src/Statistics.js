import React , {useState, useEffect}from 'react'
import axios from 'axios'

import config from './config'

const APP_URL = config.apiUrl

const Statistics = () => {


const [messages, setMessage] = useState([])

const [count, setPropertyCount] = useState()

const [messagesCount, setMessagecount] = useState()

const [forsale, setForSale] = useState()

const [forRent, setforRent] = useState()


useEffect(  ()=>{

  async function propertyCount() {
    try {

      const {data} = await axios.get(`${APP_URL}/api/allProducts`);

      if(data) {

        setPropertyCount(data)

        console.log("count", data)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  propertyCount();
  
}, [])


useEffect(  ()=>{

  async function getforsale() {
    try {

      const {data} = await axios.get(`${APP_URL}/api/allContacts`);

      if(data) {

        setForSale(data[0])

        console.log("ForSalae", data)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  getforsale();
  
}, [])


useEffect(  ()=>{

  async function getforrent() {
    try {

      const {data} = await axios.get(`${APP_URL}/api/allContacts`);

      if(data) {

        setforRent(data)

        console.log("forrent", data)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  getforrent();
  
}, [])



useEffect(  ()=>{

  async function getAllMessageCount() {
    try {

      const {data} = await axios.get(`${APP_URL}/api/allContacts`);

      if(data) {

        setMessagecount(data[0])

        console.log("Messagecount", data)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  getAllMessageCount();
  
}, [])




useEffect(  ()=>{

  async function getAllMessage() {
    try {

      const response = await axios.get(`${APP_URL}/api/allContacts`);
      

      if(response) {

        setMessage(response.data.data)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  getAllMessage();
  
}, [])
    return (
        <>
        <div class="col-md-9 statistics">
    <div class="row">

        {/* First Part */}
        <div class="col-md-6">
            <div class="card m-4 border-0 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">Products</h6>
                        <span class="badge bg-primary">{count}</span>
                    </div>
                </div>
            </div>

            <div class="card m-4 border-0 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">Message</h6>
                        <span class="badge bg-success">{forRent}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Second Part */}
        <div class="col-md-6">
            <div class="card m-4 border-0 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">Messages</h6>
                        <span class="badge bg-info">{messagesCount}</span>
                    </div>
                </div>
            </div>

            <div class="card m-4 border-0 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">Message</h6>
                        <span class="badge bg-warning">{forsale}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</div>



        </>
      );
}

export default Statistics