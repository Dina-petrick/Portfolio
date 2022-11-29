import "./productList.css"
import Product from "../product/product";
import {products} from "../../data.js";

const ProductList = () => {
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire.</h1>
                <p className="pl-desc">
                    creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img= {item.img}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList;