import FeatureCards from "./sections/FeatureCards"
import LogoSection from "./components/LogoSection"
import Navbar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards/>
    </>
  )
}

export default App