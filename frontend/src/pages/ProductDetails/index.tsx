import './styles.css';
import ProductPrice from 'components/ProductPrice';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';

const ProductDatails = () => {
    return(
        <div className="product-details-container">
            <div className="base-card product-details-card">
                <div className="goback-container">
                    <ArrowIcon />
                    <h2>BACK</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="Product name" />
                        </div>
                        <div className="name-price-container">
                            <h1>Product Name</h1>
                            <ProductPrice price={2458.26}/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Product Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem qui quod est labore maiores facere magnam hic dolorem fuga quasi ad aut dolorum beatae laudantium numquam repellat sint, ratione saepe!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDatails;