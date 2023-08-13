import { useEffect } from "react";
import { useState } from "react";
import PopulerMenuCard from "./PopulerMenuCard";

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
   <div>
   <h1 className="text-center">Populer_Menu</h1>

    
<div className="grid md:grid-cols-3 gap-4 ">
{
    menu.map(item => <PopulerMenuCard
    
    key={item.id}
    item={item}
    ></PopulerMenuCard>)
}
</div>

   </div>

    </>
  )
}

export default PopulerMenu