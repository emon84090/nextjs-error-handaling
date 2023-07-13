import React from 'react';

const Spinner = () => {
    return (
        <>
            <div className="spinner flex justify-center items-center">
                <i class='bx bx-loader-alt text-purple-700 animate-spin text-3xl font-bold'></i>
            </div>

        </>
    );
};

export default Spinner;