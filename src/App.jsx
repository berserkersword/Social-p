import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Porn from './components/porn/Porn'
// import { Context } from './context/Context'

const App = () => {
  const [category, setCategory] = useState('random')
  return (
    <div className='container'>
      <Navbar setCategory={setCategory} />
      <Porn category={category} />
    </div>
  )
}

export default App