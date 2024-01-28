import React from 'react'
import Sidebar from "./Sidebar";
import UpdateJob from './UpdateJob'

function UpdateJobScreen() {
    return (
        <>

            <div class="container-fluid pt-2">
                <div class="row">
                    <Sidebar />

                    <UpdateJob />
                </div>
            </div>     
        </>
    )
}

export default UpdateJobScreen