import React from 'react'
import { product_list } from '../../api/axios/axios'

function ProductCard({ title, description, image }) {
    return (
        <div >
            <img src={product_list(image)} style={{ width: "20%", height: "20%" }} alt={title} />
            <div >
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default ProductCard