import React from "react";
import styled from "styled-components";

import AdminLayout from "../../components/admin/AdminLayout";
import UpdateDb from "../../components/admin/UpdateDb";
import ContentContainer from "../../components/common/ContentContainer";

const SuccessMessage = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 25px;
    margin-top: 100px;
    margin-bottom: 30px;
`

const UploadSucceeded = () => {
    return (
        <AdminLayout>
            <ContentContainer>
                <div>
                    <SuccessMessage>Övningen har laddats upp!</SuccessMessage>
                    <UpdateDb />
                </div>
            </ContentContainer>
        </AdminLayout>
    );
};

export default UploadSucceeded;
