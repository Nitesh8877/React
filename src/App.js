import './App.css';
import Greet from './Greet';
import Hello from './Hello';
import UserGreeting from './ConditionalRendering/UserGreeting';
import ElementVariable from './ConditionalRendering/ElementVariable';
import TernanryOperator from './ConditionalRendering/TernarayOperator';
import ShortCircuit from './ConditionalRendering/ShortCircuit';
import Counter from './ConditionalRendering/Counter';
import Navbar from './ComponentWebsite/Navbar';
import Banner from './ComponentWebsite/Banner';
import CardSection from './ComponentWebsite/CardSection'
import Footer from './ComponentWebsite/Footer';
import Discover from './ComponentWebsite/Discover';
function App() {

  return (
   
    <div className="App">
     <h1>Hello word this is my first project</h1>
    {/* <Greet name="nitesh" />
    <Greet  name="madhu"/>
    <Greet  name="anjali"/>
    <Hello/> */}
{/* <UserGreeting/>
<ElementVariable/>
<TernanryOperator/>
<ShortCircuit/>
<Counter/> */}
<Navbar/>
<Banner/>
<CardSection/>
<Discover/>
<Footer/>

    </div>
  );
}

export default App;
