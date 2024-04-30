import "./Product.css";

function Product(props ){

    //console.log(props)
    return (
        
    <div className="Product">

    
    <h2>{props.title}</h2>
    <h4>Price: {props.price}</h4>
    <h4>Price wih 50% discount: {props.price/2}</h4>
    <h5>Features:{props.features}</h5>
    <h5>Features:{props.features2.a}</h5>


        
    {/* function Product({title, price = 10}){
        <h2>{Title} </h2>
        <h4>{price} </h4> 

    */}
   

    </div>
    );
}
export default Product;