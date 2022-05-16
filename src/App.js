import {comp2} from "./Components/constant/data"
import {comp3} from "./Components/constant/data"
import {comp4} from "./Components/constant/data"
import {comp5} from "./Components/constant/data"
import Header from "./Components/header"
import Comp1 from "./Components/comp1"
import Comp2 from "./Components/comp2"
import Comp3 from "./Components/comp3"
import Comp4 from "./Components/comp4"
import Comp5 from "./Components/comp5"
import Comp6 from "./Components/comp6"
import Comp7 from "./Components/comp7"
import Footer from "./Components/footer"

export default function App() {
  return <>
  
    <Header />
    <Comp1 />
    <Comp2 data={comp2}/>
    <Comp3 data={comp3}/>
    <Comp4 data={comp4}/>
    <Comp5 data={comp5}/>
    {/* <Comp6 /> */}
    <Comp7 />
    <Footer />
  </>
}