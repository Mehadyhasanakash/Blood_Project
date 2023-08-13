import { useEffect } from "react";
import { useState } from "react";

const PopulerMenu = () => {
    const[menu, setMenu] = useState([]);


  useEffect(()=>{
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
      const populerData = data.products.filter(item => item.brand ==="Apple")
      setMenu(populerData)
    } )
  }, [])


  
  return (
    <>
    <h1>Populer_Menu</h1>

    </>
  )
}

export default PopulerMenu