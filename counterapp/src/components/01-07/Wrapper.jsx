import React from 'react';

function MyComponentWithWrapper({ name }) {
    return (
        <div style={{ backgroundColor: 'pink', padding: '30px' }}>
            {name}
        </div>
    )
}

function Wrapper() {
    return <MyComponentWithWrapper name="samiksha" />;
}
export default Wrapper;