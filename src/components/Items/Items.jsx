import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Modal from '../Modal/Modal';


const Items = ({ items, setItems }) => {
    let [showAllBtn, setShowAllBtn] = useState(true)
    let [hideBtn, setHideBtn] = useState(false)
    let [isLoader, setIsLoader] = useState(true)
    let [singleItemId, setSingleItemId] = useState(null)

    // load data form API
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => {
                setItems(data.data.tools) 
                setHideBtn(true) //for hide show all button
                setIsLoader(false) //loader
            })
    }, [])
    return (
        <>
            <div className="container px-8 xl:px-0 max-w-7xl mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        items && items.slice(0, !showAllBtn ? items.length : 6).map(item => <Item key={item.id} item={item} setSingleItemId={setSingleItemId} />)
                    }
                </div>
            </div>
            {
                <div className='text-center my-6'>
                    {
                        hideBtn && <button onClick={() => setShowAllBtn(!showAllBtn)} className='text-center btn btn-accent text-slate-50 font-bold'>{showAllBtn ? 'Show all' : 'Show less'}</button>
                    }
                </div>
            }
            {/* Modal */}
            <Modal singleItemId={singleItemId}></Modal>
            {/* Loader */}
            {
                isLoader && <div className='fixed left-2/4 top-2/4 h-20 w-20 rounded-full border-l-lime-500 border-l-8 animate-spin'></div>
            }
        </>
    );
};

export default Items;