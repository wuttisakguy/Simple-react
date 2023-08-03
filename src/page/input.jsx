import React, {useState} from "react";

const Input = () => {
  const [getName, setName] = useState('')
  const [getLastname ,setLastname] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const onSubmit = () => {
    setLastname(getName)
  }


  return(
    <div className="bg-red-500 w-full h-screen flex justify-center items-center ">
        <div className=" w-full text-center">
          <input onChange={handleChange} value={getName} type="text" placeholder="ชื่อ" className="px-2 py-1 w-[20%] bg-gray-200	rounded-md border-2 border-gray-500 outline-none focus:bg-white focus:border-purple-500" required /> 
            <div className="mt-5">
              <button onClick={onSubmit} className="bg-green-300 px-4 py-2 rounded-md border-1 text-white hover:bg-green-500 duration-300 hover:scale-105" type="button"> ยืนยัน </button>
            </div>
            <div className="mt-5">
                <p> { getLastname }</p>
            </div>
        </div>   
    </div>
  )
}

export default Input