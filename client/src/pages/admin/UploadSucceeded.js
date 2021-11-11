import React from "react";

import AdminLayout from "../../components/admin/AdminLayout";
import UpdateDb from "../../components/admin/UpdateDb";

const UploadSucceeded = () => {
    return (
        <AdminLayout>
            <div>
                <br />
                <br />
                <h1>Övningen har laddats upp</h1>
                <br />
                <ul>
                    <br />
                    <UpdateDb />
                </ul>
            </div>
        </AdminLayout>
    );
};

export default UploadSucceeded;
