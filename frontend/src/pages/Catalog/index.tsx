import './styles.css';
import ProductCard from "components/ProductCard";
import { Link } from "react-router-dom";
import { Product } from "types/products";
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/request';
import axios from 'axios';
import CardLoader from './CardLoader';

const Catalog = () => {

    //{{host}}/products?page=0&size=12
    // Declara o estado do componente usando o useState.
    const [page, setPage] = useState<SpringPage<Product>>();
    const[isLoadeing, setIsLoading] = useState(false);
    
    // Faz a requisição 1ª vez
    useEffect(() =>{
        
        const params : AxiosParams = {
            method: 'GET',
            url: `${BASE_URL}/products`,
            params: {
                page: 0,
                size: 12
            },
        }

        setIsLoading(true);
        // quando a requisição voltar a resposta
        axios(params)
            .then(response =>{
                setPage(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    },[]);
    
    return(
        <div className="container my-4 catalog-container">
            <div className="row catalog-title-container">
                <h1>Catálogo de produtos</h1>
            </div>
            <div className="row">
                { isLoadeing ? <CardLoader /> : (
                    page?.content.map(obj => (
                        <div className="col-sm-6 col-lg-4 col-xl-3" key={obj.id}>
                            <Link to="/products/1">
                                <ProductCard product={obj} />
                            </Link>
                        </div>
                    )))}   
            </div>
            <div className="row">
                <Pagination />
            </div>
        </div>
    );
};

export default Catalog;