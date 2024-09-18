import React from 'react'

import { Item } from '.'


export const OneColumn = ({ items }) => {
    return (
        <div>
            {items && items.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
        </div>
    )
}

export const TwoColumns = ({ items }) => {
    // Split items into two arrays, one for each column
    const columnOneItems = items.filter((_, index) => index % 2 === 0);
    const columnTwoItems = items.filter((_, index) => index % 2 !== 0);

    return (
        <section className="flex justify-between masonry-wrapper" id="masonry">

            <div className="column w-[50%] m-1">
                {columnOneItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>

            <div className="column w-[50%] m-1">
                {columnTwoItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>

        </section>
    );
};



export const ThreeColumns = ({ items }) => {
    // Split items into three arrays, one for each column
    const columnOneItems = items.filter((_, index) => index % 3 === 0);
    const columnTwoItems = items.filter((_, index) => index % 3 === 1);
    const columnThreeItems = items.filter((_, index) => index % 3 === 2);

    return (
        <section className="flex justify-between  masonry-wrapper" id="masonry">
            <div className="column w-[33.30%] m-1">
                {columnOneItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>
            <div className="column w-[33.30%] m-1">
                {columnTwoItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>
            <div className="column w-[33.30%] m-1">
                {columnThreeItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>
        </section>
    );
};
