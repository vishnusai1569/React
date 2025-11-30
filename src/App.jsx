

import React from 'react'
import One from './PropsContainer/One'

const myCar={
  model:"thar",year:2025
}

function App() {
  return (
    <div>
      <One myCar={myCar} />
  
    </div>
  )
}
export default App
