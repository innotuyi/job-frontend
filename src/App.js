import logo from './logo.svg';
import './App.css';
import Home from './Home'
import JobDetails from './JobDetails'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from './ContactPage'
import About from './AboutPage'
import JobList from './JobList'
import JobDetails2 from './JobDetail2'
import Dashboard from './Dashboard'
import JobDetails3 from './JobDetails3'
import ProductScreen from './ProductScreen'
import ProductList from './ProductList'
import LoginPage from './LoginPage'
import MessagePage from './MessagePage'
import AdvertScreen from './AdvertScreen'
import ProductsList from './ProductsList'
import ProductDetails from './ProductDetails'
import ProductsSCreen from './ProductsSCreen'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="jobDetails/:id" element={<JobDetails />} />
          <Route path="productDetails/:id" element={<ProductDetails />} exact />
          <Route path="AddProduct" element={<ProductScreen />} />
          <Route path="post" element={<AdvertScreen />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="job" element={<JobList />} />
          <Route path="ProductsList" element={<ProductsSCreen />} />

          {/* <Route path="jo" element={<JobDetails2 />} />
          <Route path="details3" element={<JobDetails3 />} /> */}


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
