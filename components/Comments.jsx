import React from 'react';

const getComments = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments", { cache: 'no-store' });
    const data = await response.json();
    return data;
}
const Comments = async () => {
    const data = await getComments();
    return (
        <>
            <h2 className='text-2xl font-semibold'>Comments</h2>
            {data?.slice(0, 20).map((val) => {
                return (
                    <>
                        <div className="posts mt-5 py-1">
                            <p className='font-semibold'>{val?.email}</p>
                            <span className='text-sm'>{val?.body}</span>
                        </div>

                    </>
                )
            })}
        </>
    );
};

export default Comments;