import Product from "./Product.jsx";
function ProductList(){
    let options = ["Durable","Reliable","Fast"];
    return (
    <>
    <Product title="Phone" price={30000} features={options}/>
    <Product title="Laptop" price={80000} />
    <Product title="Pen" price={100} />
    
    </>
    )
    
}
export default ProductList;