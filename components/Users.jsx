import React from 'react';

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-store' });
    const data = await response.json();
    return data;
}
const Users = async () => {
    const data = await getUsers();
    return (
        <>
            <h2 className='text-2xl font-semibold'>Users</h2>
            {data?.map((val) => {
                return (
                    <>
                        <div className="posts mt-5 border-b border-gray-300 py-2">

                            <p className='text-purple-600'>{val?.name}</p>
                            <span className='text-sm'>{val?.email}</span>
                        </div>

                    </>
                )
            })}
        </>
    );
};

export default Users;