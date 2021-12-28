import './styles.css';

type Props = {
    name:String
}
const CategoryBadge = ({name} : Props) =>{

    return (
        <div className="category-badge-container">
            {name}
        </div>
        
    );
};

export default CategoryBadge;