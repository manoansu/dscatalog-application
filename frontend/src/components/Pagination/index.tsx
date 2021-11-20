import './styles.css';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
const Pagination = () =>{
    return(
        <div className="pagination-container">
            <ArrowIcon className="arrow-previous arrow-inactive"/>
            <div className="paginatio-item active">1</div>
            <div className="paginatio-item">2</div>
            <div className="paginatio-item">3</div>
            <div className="paginatio-item">...</div>
            <div className="paginatio-item">10</div>
            <ArrowIcon className="arrow-next arrow-active"/>
        </div>
    );
};

export default Pagination;