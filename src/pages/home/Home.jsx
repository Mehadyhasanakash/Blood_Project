import { useState } from "react"
import { useEffect } from "react"
import Banner from "../../compronents/Banner"
import BloodCetagory from "../../compronents/BloodCetagory"
import PopulerMenu from "../../compronents/PopulerMenu"

const Home = () => {

  const[menu, setMenu] = useState([]);


  useEffect(()=>{
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
      const populerData = data.products.filter(item => item.brand ==="Apple")
      console.log(populerData)
    } )
  }, [])
  return (
    <div>
        <Banner/>
        <BloodCetagory/>
        <PopulerMenu/>
    </div>
  )
}

export default Home