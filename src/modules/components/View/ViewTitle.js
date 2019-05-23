import React from 'react';

import styled from 'styled-components';

const ComponentsTitle = (props)=>{
    return(
        <ComponentsTitle.contentTitle>
            POST
        </ComponentsTitle.contentTitle>
    );
};

ComponentsTitle.contentTitle = styled.div`
    width: 100%;
    height: 3%;
    background-color: rgba(24, 78, 255, 0.3);
    text-align: center;
    font-size: 40px;
    text-shadow: 2px 2px #808080;
`;

export default ComponentsTitle;
