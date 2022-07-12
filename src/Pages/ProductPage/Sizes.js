import React,{useState} from 'react'

function Sizes({sizes,handleSize}) {
    const [sizebg, setSizebg] = useState(false)
    // console.log(props)
    const handleSizeclick = () =>{
        setSizebg(!sizebg)
        handleSize()
    }
  return (
    <div onClick={handleSizeclick} className={sizebg?'size_bg_bl':'size_bg_wl'}>{sizes}</div>
  )
}

export default Sizes