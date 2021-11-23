import React from "react";

import UpdateDb from "../../components/admin/UpdateDb";
import ContentContainer from "../../components/common/ContentContainer";

const UploadSucceeded = () => {
    return (
        <ContentContainer>
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
        </ContentContainer>
    );
};

export default UploadSucceeded;
