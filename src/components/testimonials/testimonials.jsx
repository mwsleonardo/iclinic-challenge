import React from 'react'
import TestimonialsCarousel from './testimonialsCarousel.jsx'
import "./testimonials.css"

const Testimonials = () => {
    return (
        <div className="testimonials"> 
            <h1>Nossos clientes</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel />
                </div>
            </div>
            
        </div>
    )
}

export default Testimonials
