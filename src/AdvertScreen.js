import React from 'react'
import Sidebar from "./Sidebar";
import AddAdvert from './AddAdvert';
const AdvertScreen = () => {
    return (
        <>

            <div class="container-fluid pt-2">
                <div class="row">
                    <Sidebar />

                    <AddAdvert />
                </div>
            </div>
        </>

    )
}

export default AdvertScreen