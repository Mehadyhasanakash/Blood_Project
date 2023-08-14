import { Helmet } from "react-helmet-async"
import Cover from "./Cover";
import image from '../../assets/image/banner_05.jpg'

const Menu = () => {
  return (
    <div>
        <Helmet>
        <title>Blood || Menu</title>
        
      </Helmet>
        <Cover img={image}/>
      
    </div>
  )
}

export default Menu
