import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const copyText = useRef()
  const [length, setLength] = useState(1)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = "0123456789"
  const specialCharacter = ".[]{}()<>*+-=!?^$|"
  const [includeAlfabets, setIncludeAlfabets] = useState(false)
  const [specialChar, setspecialChar] = useState(false)
 

  const [randomNumber,setRandomNumber] = useState("")

  // const generateRandomNumber = useCallback(()=>{

      
  // },[includeAlfabets,specialChar,setLength])

  useEffect(()=>{
    let result=""
    for(let i=0;i<length;i++){
      result += (Math.floor(Math.random() * numbers.length));
      if(includeAlfabets)(
        result+= characters.charAt(Math.random() * characters.length)
      )
      if(specialChar)(
        result+= specialCharacter.charAt(Math.random() * specialCharacter.length)
      )
      setRandomNumber(result)
    }
  },[includeAlfabets,specialChar,length])

  const copytext = () => {
    copyText.current?.select()
    navigator.clipboard.writeText(copyText.current.value);
  }

  return (
  <div className='flex flex-col h-screen justify-center text-center'>
    <div className='mx-auto w-1/4'>
      <h1 className="title">Password Generator</h1>
      <p className="subtitle">Generate a random password for your online accounts.</p>
      <div className='w-full flex justify-between'>
      <input
      type='text'
      placeholder='Enter the length of your desired password...'
      readOnly
      value={randomNumber}
      className='p-2 w-full border-[1px] border-gray-600'
      ref={copyText}
      />
      <button onClick={()=>copytext()}>Copy</button>
      </div>
      <div>
     
      <input
            type='range'
            min={1}
            max={12}
            defaultValue={1}
            value={length}
            placeholder='Enter the length of your desired password...'
            onChange={(e) => setLength(parseInt(e.target.value))}/>
             <label>Length: {length}</label>
      </div>
     

      <div>
      <input
      type='checkbox'
      id='includeAlfabets'
      name='alfabets'
      checked={includeAlfabets}
      onClick={()=>setIncludeAlfabets(pre=>!pre)}
      />
        <label>Alfabets</label>
      </div>


      <div>
     
      <input
      type='checkbox'
      id='includeSpecialChar'
      name='specialChar'
      checked={specialChar}
      onClick={()=>setspecialChar(pre=>!pre)}
      />
        <label>Special Characters</label>
      </div>

     

     
    </div>
  </div>
  )
}

export default App
