import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Item = ({ item, setSingleItemId }) => {
    let {id, image, features, published_in:date, name } = item


    return (
        <div className='rounded-lg bg-slate-50 shadow-lg'>
            <figure className='h-64'>
                <img src={image} className='rounded-lg h-full w-full' alt="" />
            </figure>
            <div className="card-body p-4 space-y-4 ">
                <h2 className='font-bold text-2xl'>Features</h2>
                <ul className='space-y-2'>
                    {
                        features.map((feature, index) => <li key={index}>{index+1}. {feature}</li>)
                    }
                </ul>
                <hr className='border-2 border-sky-200' />
                <h2 className='font-bold text-2xl'>{name}</h2>
                <div className="item-footer flex justify-between font-semibold text-xl">
                    <span><FontAwesomeIcon icon={faCalendarDays} /> {date}</span>
                    <label onClick={()=> setSingleItemId(id)} htmlFor="my-modal-3" className='cursor-pointer text-accent'><FontAwesomeIcon icon={faArrowRight} /></label>
                </div>
            </div>
        </div>
    );
};

export default Item;