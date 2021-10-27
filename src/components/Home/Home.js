import React from 'react';
import './Home.css';
import banner from '../../assets/img/medicine.jpg';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import useServices from '../../hooks/useServices';
import { NavLink } from 'react-router-dom';
import useTestimonials from '../../hooks/useTestimonials';
import Footer from '../Footer/Footer';
const Home = () => {

    const [dataServices] = useServices();
    const [testimonials] = useTestimonials();
    
    return (
        <div>
            <div style = {{backgroundImage: `url(${banner})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'}}
             className="banner-section col-md-12 col-sm-6">
            <p className="banner-p container-fluid">EFFECTIVE MEDICINE, NEW MEDICINE EVERYDAY</p>
            <h1 className="banner-h1 container-fluid">WELCOME TO<br />AHMED PHARMA</h1>
            <NavLink to ="/products" className= "btn btn-light btn-regular">SHOP NOW</NavLink>
            </div>
            <div className="services-section mt-4">
                <h1>Our Services are: </h1>
                <div className = "card-grid">
            {
               dataServices.map(
                   service => <Services
                   service = {service}
                   key = {service.key}
                   ></Services>
                   )
            }
            </div>
            </div>
            <div className = "container container-fluid products-section">
            <h1 className = "mb-5 prod-h1">Check out our Special Products.</h1>
            <NavLink to ="/products" className= "btn btn-light btn-regular-2">See Products Collections</NavLink>
            </div>

            <div className="services-section mt-4">
                <h1>Respected Customers Reviews: </h1>
                <div className = "card-grid">
            {
               testimonials.map(
                   testimonial => <Testimonials
                   testimonial = {testimonial}
                   key = {testimonial.key}
                   ></Testimonials>
                   )
            }
            </div>
            </div>

            <Footer></Footer>



        </div>
        
    );
};

export default Home;