import React from 'react'

const AddProduct = () => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        poster:"",
        price: "",
        category: "",
        bestSeller: ""
    })
    const submitForm = (e) => {
        e.preventDefault();
        fetch("https://amazonapp-fakedb.herokuapp.com/products", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: json.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                alert(`The Movie ${data.title} was added successfully`)
            })
            .catch(err => console.log(`Error:${err}`))


    }
    return (
        <div>
            <form action="/" method="POST" onSubmit={submitForm}>
                <div className="form-control-container">

                    <label htmlFor="title"> Title</label>

                    <textarea className="form-control" id="title" value={product.title} onChange={(event) => {
                        setProduct({
                            ...product,
                            title: event.target.value
                        });
                    }}></textarea>

                    <span className="error">{errorTitle}</span>

                </div>

                <div className="form-control-container">

                    <label htmlFor="description"> Description</label>
                    <textarea className="form-control" id="description" value={product.description} onChange={(event) => {
                        setProduct({
                            ...product,
                            description: event.target.value
                        });
                    }}></textarea>

                    <span className="error">{errorDescription}</span>

                </div>
                <div className="form-control-container">

                    <label htmlFor="poster"> Poster</label>
                    <textarea className="form-control" id="description" value={product.poster} onChange={(event) => {
                        setProduct({
                            ...product,
                            poster: event.target.value
                        });
                    }}></textarea>

                    <span className="error">{errorDescription}</span>

                </div>
                <div className="form-control-container">

                    <label htmlFor="price"> Price</label>
                    <textarea className="form-control" id="price" value={product.price} onChange={(event) => {
                        setProduct({
                            ...product,
                            price: event.target.value
                        });
                    }}></textarea>

                    <span className="error">{errorDescription}</span>

                </div>
                <div className="form-control-container">

                    <label htmlFor="category"> Category</label>
                    <textarea className="form-control" id="description" value={product.category} onChange={(event) => {
                        setProduct({
                            ...product,
                            category: event.target.value
                        });
                    }}></textarea>

                </div>
                <div className="form-control-container">

                    <label htmlFor="bestSeller"> BestSeller</label>
                    <textarea className="form-control" id="description" value={product.bestSeller} onChange={(event) => {
                        setProduct({
                            ...product,
                            bestSeller: event.target.value
                        });
                    }}></textarea>

                </div>
                <button type="submit">Add a product</button>
            </form>
        </div >
    )
}

export default AddProduct
