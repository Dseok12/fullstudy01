import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 1. 타이포그래피 */}
      <div className='text-xs'>text-xs</div>
      <div className='text-sm'>text-sm</div>
      <div className='text-lg text-red-500 font-black'>text-lg</div>
      <div className='text-xl'>text-xl</div>
      <div className='text-2xl'>text-2xl</div>
      <div className='text-3xl'>text-3xl</div>
      <div className='text-[13px]'>text-13px</div>

      {/* 2. 백그라운드컬러 */}
      <div className='bg-amber-500'>bg-amber-500</div>

      {/* 3. 사이즈 */}
      <div className='w-32 h-16 bg-sky-500 mt-[10px]'>w-32 h-16</div>
      <div className='w-[200px] h-[200px] bg-sky-500 mt-[10px]'>w-[200px] h-[200px]</div>
    </>
  )
}

export default App
