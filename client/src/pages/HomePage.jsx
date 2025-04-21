import React from 'react'
import Card from '../components/Card'
import Dummy from '../components/Dummy'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
    <Navbar/>
      <h1 className="text-3xl font-bold mb-6 text-center">OUR AVAILABLE ROOM</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Dummy.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            description={data.description}
            location={data.location}
          />
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default HomePage