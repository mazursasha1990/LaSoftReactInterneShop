
import React from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import './index.scss';


function ProductPage() {
    const { id } = useParams()

    return (
        <div>
            Product Page
        </div>
    );
};

export default ProductPage;