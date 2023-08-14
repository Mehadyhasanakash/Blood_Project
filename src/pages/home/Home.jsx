import { Helmet } from "react-helmet-async"
import Banner from "../../compronents/Banner"
import BloodCetagory from "../../compronents/BloodCetagory"
import PopulerMenu from "../../compronents/PopulerMenu"
import Review from "../../compronents/Review"

const Home = () => {

  
  return (
    <div>
      <Helmet>
        <title>Blood || Home</title>
        
      </Helmet>
        <Banner/>
        <BloodCetagory/>
        <PopulerMenu/>
        <Review/>
    </div>
  )
}

export default Home