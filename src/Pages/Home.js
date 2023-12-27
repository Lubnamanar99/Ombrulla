import React from 'react'
import Banner from '../components/Banner'
import Secondbanner from '../components/Secondbanner'
import Thirdbanner from '../components/Thirdbanner'
import Fourthbanner from '../components/Fourthbanner'
import Fifthbanner from '../components/Fifthbanner'
import Petran from '../components/Petran'
import Product from '../components/Product'
import Customers from '../components/Customers'
import Testimonials from '../components/Testimonials'
import Brand from '../components/Brand'
import Blog from '../components/Blog'


function Home() {
  return (
    <div >
     <Banner></Banner>
     <Secondbanner></Secondbanner>
     <Thirdbanner></Thirdbanner>
     <Fourthbanner></Fourthbanner>
     <Fifthbanner></Fifthbanner>
     <Petran></Petran>
     <Product></Product>
     <Customers></Customers>
     <Testimonials></Testimonials>
     <Brand></Brand>
     <Blog></Blog>
    </div>
  )
}

export default Home