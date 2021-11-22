import './styles.css';
import ProductPrice from 'components/ProductPrice';
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import { Product } from 'types/products';
import axios from 'axios';
import { BASE_URL } from 'util/request';
import { useEffect, useState } from 'react';
import ProducInfoLoader from './ProdctInfoLoader';
import ProducDetailsLoader from './ProductDetailsLoader';

type UrlParams = {
    productId: string;
}

const ProductDatails = () => {

    const { productId } = useParams<UrlParams>();
    const [isLoading, setIsLoading] = useState(false);

    // Declara o estado do componente usando o useState.
    const[product, setProduct] = useState<Product>();

    // Amarar o componente do react usando useEffect.
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/products/${productId}`)
        .then(response =>{
            setProduct(response.data)
        })
        .finally(() => {
            setIsLoading(false);
        });
    },
    [productId]);
    

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
                        { isLoading ?  ( <ProducInfoLoader /> ) :
                            (<>
                        <div className="img-container">
                            <img src={product?.imgUrl}
                            alt={product?.name} />
                        </div>
                        <div className="name-price-container">
                            <h1>{product?.name}</h1>
                            {product && <ProductPrice price={product?.price}/>}
                        </div>
                        </>)}
                    </div>
                    <div className="col-xl-6">
                        { isLoading ? (<ProducDetailsLoader />) : (
                            <div className="description-container">
                            <h2>Product Description</h2>
                            <p>{product?.description}</p>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDatails;