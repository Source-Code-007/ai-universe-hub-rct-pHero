import React, { useEffect, useState } from 'react';

const Modal = ({ singleItemId }) => {
    let [singleData, setSingleData] = useState([])
    let { description, features, integrations, image_link, pricing, input_output_examples } = singleData
    let bgForPricing = ['bg-orange-500', 'bg-green-500', 'bg-red-500']
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${singleItemId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
    }, [singleItemId])

    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative max-w-screen-xl bg-slate-50 p-12">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="modal-left bg-orange-100 p-4 border border-orange-500 space-y-4">
                            <h3 className="text-lg font-bold">{description}</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 px-5">
                                {
                                    pricing && pricing.map((p, ind) => <div key={ind} className={`font-bold p-3 text-slate-50 text-center flex items-center justify-center ${bgForPricing[ind]} rounded-lg`}>{p.price}/ {p.plan}</div>)
                                }
                            </div>
                            <div className='grid grid-cols-2  gap-4 justify-between'>
                                <div>
                                    <h2 className='font-bold text-2xl'>Features</h2>
                                    <ul>
                                        {
                                            Object.values(features || {}).map((feature, ind) => <li key={ind}>{feature.feature_name}</li>)
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='font-bold text-2xl'>Integration</h2>
                                    <ul>
                                    {
                                        integrations ? integrations.map((i, ind) => <li key={ind}>{i}</li>) : 'Not found!'
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-right">
                            <figure>
                                <img src={image_link ? image_link[0] : null} alt="" />
                            </figure>
                            <div className='py-5 space-y-4'>
                                {
                                     <h2 className='font-bold text-2xl'>{ input_output_examples ? input_output_examples[0].input : 'Question not found' }</h2>
                                }
                                {
                                     <p className='font-semibold text-lg'>{ input_output_examples ? input_output_examples[0].output : 'Answer not found' }</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;