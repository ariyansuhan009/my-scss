import React, {useContext, useEffect, useState} from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from '../../App';

const allproducts = [
    {name:'HP', category:'Laptop'}, 
    {name: 'ASUS', category: 'Laptop'}, 
    {name:'Lenovo', category:'Laptop'}, 
    {name:'Dell', category:'Laptop'},

    {name:'Samsung', category:'Mobile'},
    {name:'Nokia', category:'Mobile'},
    {name:'Redmi', category:'Mobile'},
    {name:'Apple', category:'Mobile'},

    {name:'Canon', category:'Camera'},
    {name:'Nikkon', category:'Camera'},
    {name:'Sony', category:'Camera'},
    {name:'Ariyan', category:'Camera'}]

const Categories = () => {
    const category = useContext(CategoryContext);
    const [products, setPrducts] = useState([]);
    useEffect(() => {
        const matchProducts = allproducts.filter(pd => pd.category === category.toLowerCase);
        setPrducts(matchProducts);
    }, [category])
    
    return (
        <div>
            <h2>Select your Categories: {category}</h2>
            
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;