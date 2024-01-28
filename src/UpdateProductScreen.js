import React from 'react'
import Sidebar from "./Sidebar";
import UpdateProduct from './UpdateProduct'

function UpdateProductScreen() {
    return (
        <>

            <div class="container-fluid pt-2">
                <div class="row">
                    <Sidebar />

                    <UpdateProduct />
                </div>
            </div>     
        </>
    )
}

export default UpdateProductScreen