import './styles.css';
import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import CategoryBadge from '../CategoryBadge';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/request';

type Props ={
    product: Product;
    onDelete: Function;
}

const ProductCrudCard = ({ product, onDelete } : Props) =>{

    const handleDelete = ( productId: number ) => {
        // verifica caso o user clicar em cancelar ele nao executa o evento..
        if(!window.confirm('Tem certeza que deseja remover produto' + productId + '?')){
            return;
        }

        //Faz quealquer requisição usando o endpoint e o verbo desejado..
        const config: AxiosRequestConfig = {
            method: 'DELETE',
            url: `/products/${productId}`,
            withCredentials:true
        };

        // Faz a requisição ao backend para pegar informaçao desejado..
        requestBackend(config)
            .then((Response) => {
                onDelete();
                console.log('DELETADO ID ' + productId);
            })
    }

    return (
        <div className="base-card product-crud-card">
            <div className="product-crud-card-top-container">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className='product-crud-card-description'>
                <div className="product-crud-card-bottom-container">
                    <h6>{product.name}</h6>
                    <ProductPrice price={product.price}/>
                </div>
                <div className="product-crud-card-categories-container">
                    {product.categories.map(obj =>(
                        <CategoryBadge name ={obj.name} key={obj.id}/>
                    ))}
                </div>
            </div>
            <div className='product-crud-card-buttons-container'>
                <button 
                    onClick={() => handleDelete(product.id)}
                    className='btn btn-outline-danger product-crud-card-button  product-crud-card-button-first'>
                    EXCLUIR
                </button>
                
                <Link to={`/admin/products/${product.id}`}>
                    <button 
                        className='btn btn-outline-secondary product-crud-card-button'>
                            EDITAR
                    </button>
                </Link>
            </div>

        </div>

    ) ;
}

export default ProductCrudCard;