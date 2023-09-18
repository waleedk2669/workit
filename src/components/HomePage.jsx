import React from 'react'
import Header from './Header'
import Cards from './Cards'
import Testimonials from './Testimonials'
import Footer from './Footer'
const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <Cards />
      <Testimonials />
      <Footer />
    </div>
    
  )
}

export default HomePage
