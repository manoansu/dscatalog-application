import './styles.css';
import ProductPrice from 'components/ProductPrice';
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import { Product } from 'type/products';
import axios from 'axios';
import { BASE_URL } from 'util/request';
import { useEffect, useState } from 'react';

const ProductDatails = () => {

    // Declara o estado do componente usando o useState.
    const[product, setProduct] = useState<Product>();

    // Amarar o componente do react usando useEffect.
    useEffect(() => {
        axios.get(BASE_URL + '/products/1')
        .then(response =>{
            setProduct(response.data)
        });
    },
    []);
    

    return(
        <div className="product-details-container">
            <div className="base-card product-details-card">
                <Link to="/products">
                    <div className="goback-container">
                        <ArrowIcon />
                        <h2>BACK</h2>
                    </div>
                </Link>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src={product?.imgUrl}
                            alt={product?.name} />
                        </div>
                        <div className="name-price-container">
                            <h1>{product?.name}</h1>
                            {product && <ProductPrice price={product?.price}/>}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Product Description</h2>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDatails;