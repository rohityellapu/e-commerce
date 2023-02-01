import Products from "./Products";
function Items({ products }) {
    return (
        <>
            <div className="flex flex-wrap justify-center">

                { products.map((product, i) => (
                    <Products key={ i }
                        imgUrl={ product.thumbnail }
                        title={ product.title }
                        brand={ product.brand }
                        price={ product.price }
                        rating={ product.rating }
                        discount={ product.discountPercentage }
                        description={ product.description }
                    />
                )) }
            </div>
        </>
    );
}
export default Items;
