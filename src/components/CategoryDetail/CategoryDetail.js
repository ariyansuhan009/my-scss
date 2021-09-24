import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} = props.product;
    
    return (
        <div>
            <h4>This is your CategoryDetail: </h4>
            <h5>Select Product: {name}</h5>
        </div>
    );
};

export default CategoryDetail;