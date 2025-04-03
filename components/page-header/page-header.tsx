import React from 'react';

const PageHeader = ({title, children}: {
    title: string,
    children?: React.ReactNode
}) => {
    return (
        <div className='flex justify-between w-full px-5 py-4 border-b flex-wrap gap-2'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
                {title}
            </h1>
            <div className='flex gap-4'>
                {children}
            </div>
        </div>
    );
};

export default PageHeader;
