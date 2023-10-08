import styless from "./categorySelection.module.css"
import React, { useState } from 'react';

function CategorySelection({ category1, category2, data1, data2, width, height }) {
    const [index, setIndex] = useState(1);

    return (
        <div>
            <div className={styless.category}>
                <span
                    onClick={() => setIndex(1)}
                    className={index === 1 ? styless.selected : ''}
                >
                    {category1}
                </span>
                <span
                    onClick={() => setIndex(2)}
                    className={index === 2 ? styless.selected : ''}
                >
                    {category2}
                </span>
            </div>

            {index === 1 ? (
                <div className={styless.informationBox}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                    }}
                >
                    <p>{data1}</p>
                </div>
            ) : (
                <div className={styless.informationBox}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                    }}
                >
                    <p>{data2}</p>
                </div>
            )}
        </div>
    )
}

export default CategorySelection