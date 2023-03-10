import React, {useRef, useState} from 'react'

const RefComponent = () => {
  const [y, setY] = useState(0);

  let x = 10;

  const ref = useRef(0);
  /**
   * not like => ref = 0
   * 
   * ref = {current: 0}
   * 
   */
  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
      <div>
        <button className='bg-green-100 p-2 m-4' onClick={() => {
          x = x + 1;
          console.log(x);
        }}>Increase X</button>
        <span className='font-bold text-xl'>Let X: {x}</span>
      </div>
      <div>
        <button className='bg-green-100 p-2 m-4' onClick={() => {
          setY(y+1);
        }}>Increase Y</button>
        <span className='font-bold text-xl'>Let Y: {y}</span>
      </div>
      <div>
        <button className='bg-green-100 p-2 m-4' onClick={() => {
          ref.current = ref.current + 1;
        }}>Increase Y</button>
        <span className='font-bold text-xl'>Let Z: {ref.current}</span>
      </div>
      
    </div>
  )
}

export default RefComponent