import React from 'react';
import './index.css';

import { ReactComponent as Like } from './img/like.svg'
import { api } from '../../utils/api';


export const Card = ({ name, price, wight, pictures, image, gender, likes, discount, userId, product,handleLike, ...args }) => {
    const isLiked = likes.some(e => e === userId);
    const handleClick = () => {
        // isLiked
        //     ? api.deleteLike(product._id).then((data) => console.log(data))
        //     : api.addLike(product._id).then((data) => console.log(data));

        // const response = await api.addLike(product._id);
        // console.log({response});

        handleLike(product, isLiked);

        // const resp = await api.changeProductLike(product._id, isLiked);
        // console.log({ resp })
    }
    // console.log(isLiked);
    return (
        <div className='card'>
            <div className='card__sticky card__sticky_type_top-left'>
                {!!discount && <span className='card__discount'>
                    -{discount}%
                </span>}
                {args.tags.map(e => <span className={`tag tag_type_${e}`} key={e}>{e}</span>)}
            </div>
            <div className='card__sticky card__sticky_type_top-right'>

                <button onClick={handleClick} className={`card__favorite ${isLiked ? 'card__favorite_active' : ''}`}>
                    <Like />
                </button>

            </div>
            <a href="/" className='card__link'>
                <img src={pictures ?? image} alt="food" className='card__image' />
                <div className='card__desc'>
                    <span className='card__price'>{price}p</span>
                    <span className='card__weight'>{wight}</span>
                </div>
                <p className='card__name'>{name}</p>
            </a>
            <span className='card__card btn btn_type_primary'>В Корзину</span>
        </div>
    )
}