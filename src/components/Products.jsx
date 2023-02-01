import React, { useState } from 'react'
import Popup from 'reactjs-popup';

function Products({ imgUrl, title, brand, price, discount, rating, description }) {
    let [ishovered, setHovered] = useState(false)
    function handleMouseOver(e) {
        setHovered(true);

    }
    function handleMouseOut(e) {
        setHovered(false);

    }
    const closeModal = () => setHovered(false);
    return (
        <>


            <div className='flex flex-col w-64 m-2 p-2 bg-green-100 rounded-lg hover:cursor-pointer hover:scale-110' onClick={ handleMouseOver }>
                <img className='w-full h-56 rounded-lg' src={ imgUrl } alt="" />
                <h2 className='text-lg font-bold'>{ title }</h2>

                <div className="flex flex-row justify-between items-center">
                    <div className="price text-lg">Price: ₹ { price }</div>
                    <div className="discount text-green-800 bg-green-300 p-2 rounded-full">{ discount } %</div>
                </div>
                <div className="rating text-start text-green-600 text-lg">Rating: { rating }</div>
            </div>


            <Popup open={ ishovered } className='duration-500' closeOnDocumentClick onClose={ closeModal } position='right center'>
                <div className="modal bg-white p-4">
                    <a className="close px-2 font-bold text-red-800 hover:cursor-pointer bg-red-400 rounded-full" onClick={ closeModal }>
                        &times;
                    </a>
                    <div className="div flex flex-col lg:flex-row gap-2 p-2 rounded-xl">
                        <div className='flex flex-col w-72 m-2 p-2 bg-green-100 rounded-lg' onClick={ handleMouseOver }>
                            <img className='w-full h-64 rounded-lg' src={ imgUrl } alt="" />
                            <h2 className='text-lg font-bold'>{ title }</h2>

                            <div className="flex flex-row justify-between items-center">
                                <div className="price text-lg">Price: ₹ { price }</div>
                                <div className="discount text-green-800 bg-green-300 p-2 rounded-full">{ discount } %</div>
                            </div>
                            <div className="rating text-start text-green-600 text-lg">Rating: { rating }</div>
                        </div>
                        <p className='w-56 text-lg font-semibold
                        '> Description: { description }</p>
                    </div>
                </div>
            </Popup>
        </>
    )
}



const ControlledPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return (
        <div>
            <button type="button" className="button" onClick={ () => setOpen(o => !o) }>
                Controlled Popup
            </button>
            <Popup open={ open } closeOnDocumentClick onClose={ closeModal }>
                <div className="modal">
                    <a className="close" onClick={ closeModal }>
                        &times;
                    </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                    omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                    ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                    doloribus. Odit, aut.
                </div>
            </Popup>
        </div>
    );
};
export default Products
