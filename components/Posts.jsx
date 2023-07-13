import React from 'react';

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' });
    const data = await response.json();
    return data;
}
const Posts = async () => {
    const data = await getPosts();
    return (
        <>
            <h2 className='text-2xl font-semibold'>Posts</h2>
            {data?.slice(0, 20).map((val) => {
                return (
                    <>
                        <div className="posts mt-5 border-b border-gray-300 py-2">
                            <h2 className='text-lg capitalize text-purple-700 font-semibold underline'>{val?.title}</h2>
                            <span className='mt-1 text-sm text-gray-600'>{val?.body}</span>
                        </div>

                    </>
                )
            })}
        </>
    );
};

export default Posts;