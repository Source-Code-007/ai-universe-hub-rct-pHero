import React from 'react';

const Title = ({items, setItems}) => {
    // sorting data
    let sortFunc = ()=>{
        let sortItems = items.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in)
        })
        setItems([...sortItems])
    }

    return (
        <div className='text-center py-10 space-y-7'>
            <h2 className='font-bold text-3xl'>AI Universe Hub</h2>
            <button className='btn btn-accent text-slate-50 font-bold text-xl' onClick={sortFunc}>Sort by date</button>
        </div>
    );
};

export default Title;