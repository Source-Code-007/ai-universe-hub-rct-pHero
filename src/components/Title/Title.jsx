import React from 'react';

const Title = ({items, setItems}) => {
    // sorting data
    let sortFunc = ()=>{
        let sortItems = [...items].sort((itemOne, itemTwo)=>{
            let date1 = new Date(itemOne.published_in)
            let date2 = new Date(itemTwo.published_in)
            if(date1>date2){
                return 1
            } else if(date1<date2){
                return -1
            } else{
                return 0
            }
        })
        setItems(sortItems)
    }

    return (
        <div className='text-center py-10 space-y-7'>
            <h2 className='font-bold text-3xl'>AI Universe Hub</h2>
            <button className='btn btn-accent text-slate-50 font-bold text-xl' onClick={sortFunc}>Sort by date</button>
        </div>
    );
};

export default Title;