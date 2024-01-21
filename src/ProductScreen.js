import React from 'react'
import Sidebar from "./Sidebar";
import AddProductForm from './AddProductForm';
const ProductScreen = () => {
    return (
        <>

            <div class="container-fluid pt-2">
                <div class="row">
                    <Sidebar />

                    <AddProductForm />
                </div>
            </div>
        </>

    )
}

export default ProductScreen