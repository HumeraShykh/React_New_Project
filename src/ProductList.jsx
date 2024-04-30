import Product from "./Product.jsx";
function ProductList(){
    let options = ["Durable","Reliable","Fast"]
    let options2 = {a: "Time", b: "place"}
    return (
    <>
    <Product title="Phone" price={30000} features={options} features2={{a: "Time"}}/>
    {/* <Product title="Laptop" price={80000}  />
    <Product title="Pen" price={100} /> */}
    
    </>
    )
    
}
export default ProductList;