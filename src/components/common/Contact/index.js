import React from 'react';

import './index.scss';

// import { AddTodo } from '..';
import AddProducts from '../AddProductsList/AddProducts';

function Contact() {
    return (
        <main className="mainContact">
            {/* NEW  Contact page */}
            <div>
                <AddProducts />
            </div>


        </main>
    )
}

export default Contact;