import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "../common/ShowImage";

const Product = ({ products }) => {
    return (
        <section className="terms-items">
            <header>
                <h2> آخرین محصولات فروشگاه    </h2>
                <Link to="/archive"> مشاهده همه محصولات </Link>
            </header>
            <div className="row">
                {products.map(product => (
                    <div
                        key={product._id}
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
                    >
                        <article>
                            <Link
                                to={`/product/${product._id}`}
                                className="img-layer"
                            >
                                {/* <img
                                    src={`http://localhost:4000/${product.imageUrl}`}
                                /> */}
                                <ShowImage image={product.imageUrl} />
                            </Link>
                            <h2>
                                <Link to={`/product/${product._id}`}>
                                    {product.title}
                                </Link>
                            </h2>
                            <span> {product.price === 0 ? "رایگان" : `${product.price}`} </span>
                            <i>1:52:32</i>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Product;
