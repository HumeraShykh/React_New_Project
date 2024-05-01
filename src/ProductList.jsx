import Product from "./Product.jsx";
function ProductList(){
    //array
    let options = ["Durable","Reliable","Fast"]
    //object
    let options2 = {a: "Selfie Stick", b: "Cute Cover"}
    ///represent an array anotherway
    let color = ["red","blue"]
    return (
    <>
    <Product title="Phone" price={30000} features={options} Gift={options2} colors={color}/>
    
    
    </>
    )
    
}
export default ProductList;