import "./SimpleProduct.css";
function SimpleProduct(props){
    return(
        <>
            <div className="Container">
            <h4>Title: {Title} </h4>
            <h4>Price: {Price} </h4>
            </div>
        </>
    );
}
export default SimpleProduct;