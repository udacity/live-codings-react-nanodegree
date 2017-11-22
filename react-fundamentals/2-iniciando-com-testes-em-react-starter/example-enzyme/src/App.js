import React from 'react'
import Image from './Image'

const App = () => (
  <div>
    <Image 
      source="https://images.unsplash.com/photo-1456244440184-1d494704a505" 
      description="picture of Machu Picchu under cloudy weather"
      width={500} />
    <Image 
      source="https://images.unsplash.com/photo-1494756739853-38af58aa9dd0"
      description="picture of a subway station in New York City"
      width={500} />
  </div>
)

export default App
