import React from 'react'



const Products = (props) => {
    console.log("hello")
    return (
        <>
            <select className="filterByBrand" id="" onChange={props.filterSelect}>
                <option value="None">All shoes</option>
                <option value="Jordan">Jordan</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
            </select>

            <select className="filterByPrice" id="" onChange={props.filterSelect}>
                <option value="None">Price</option>
                <option value="lowToHigh">Low-High</option>
                <option value="highToLow">High-Low</option>
            </select>
            <div className="productsContainer">
                {props.shoes.map(shoe => {

                    return (
                        <div className="gallery">
                            <div className="imageContainer">
                            <img src={shoe.imageUrl} alt="Cinque Terre" />
                            </div>
                            <div className="desc">{shoe.shoeName}</div>
                            <select>
                                {shoe.sizes.map(size => {
                                    return (
                                        <option value={size.size}>{size.size}</option>
                                    )
                                })}
                            </select>
                            <p className="price">{shoe.price}</p>
                            <button>Buy Now</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Products