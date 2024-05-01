import "./App.css"
import Button from "./button";
import Sum from "./Sum";
import ProductList from "./ProductList";
import SpacingComponent from "./SpacingComponent";
import SimpleProductList from "./SimpleProductList";

//import { Button, Sum } from "./button";


//A new Component
function Title(){
  return <h1>Hey I'm a Title Component</h1>
}

function App() {
  // There is also a way of return
  //  return <Title />;

  return (
    <div>
     
       <Sum /> 
      <Button />
      <ProductList />
      <SpacingComponent />
      {/* <SimpleProductList /> */}
    </div>
  );
  
}


 
export default App;
