import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Hero from "../components/landing/hero"
import Card from "../components/landing/card"
import Join from "../components/landing/joinus"
import Review from "../components/landing/review"
import Feature from "../components/landing/feature"

const Landing = () => {
  return (
   <div>
    <Navbar />
    <Hero /> 
    <Feature />
    <Card />
    <Join />
    <Review />
    <Footer />
   </div>
  )
}

export default Landing