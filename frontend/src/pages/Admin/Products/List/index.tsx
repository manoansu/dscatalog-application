import './styles.css';
import ProductCrudCard from "pages/Admin/Products/ProductCrudCard";
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Product } from 'types/product';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/request';
import Pagination from 'components/Pagination';
import ProductFilter, { ProductFilterData } from 'components/ProductFilter';

type ControlComponentsData = {
    activePage: number;
    filterData: ProductFilterData;
}

const List = () =>{

    const [page, setPage] = useState<SpringPage<Product>>();

    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>(
        {
            activePage: 0,
            filterData: {name: '', category: null}
        }
    );

    // Função que trata a mudança de evento da pagina..
    const handlePageChange = (pageNumber: number) => {
        setControlComponentsData( {activePage:pageNumber, filterData: controlComponentsData.filterData});
    };

    // Função que trata a mudança de evento do filtro...
    const handleSubmitFilter = (data: ProductFilterData) =>{
        setControlComponentsData( {activePage:0, filterData: data});
    };
    

   const getProducts = useCallback(() => {
       //Faz quealquer requisição usando o endpoint e o verbo desejado..
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/products',
        params: {
            page: controlComponentsData.activePage,
            size: 3,
            name: controlComponentsData.filterData.name,
            category: controlComponentsData.filterData.category?.id
        }
    };

    // Faz a requisição ao backend para pegar informaçao desejado..
    requestBackend(config)
     .then((response) => {
         setPage(response.data);
     });
    },[controlComponentsData])   

    useEffect(() => {
        getProducts();
     }, [getProducts]);

    return(
        <div className='product-crud-container'>
            <div className='product-crud-bar-container'>
                <Link to="/admin/products/create">
                    <button className="btn btn-primary text-white btn-crud-add">ADICIONAR</button>
                </Link>

                <ProductFilter onSubmitFilter={handleSubmitFilter} />

            </div>

            <div className='row'>
                {page?.content.map(product => (
                <div key={product.id} className='col-sm-6 col-md-12'>
                    <ProductCrudCard product= {product} onDelete ={getProducts} />
                </div>
                ))}                
            </div>
            <Pagination
                forcePage={page?.number} 
                pageCount={(page) ? page.totalPages: 0}
                range={3}
                onChange={handlePageChange}
            />
        </div>
    );
};

export default List;