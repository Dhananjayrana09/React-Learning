import './ProductForm.css';
import {useState} from 'react';

function ProductForm() {

    const [newTitle, setTitle] = useState('')
    const [newDate, setDate] = useState('')

    function titleInputHandaler(event) {
        setTitle(event.target.value);
    }

    function dateInputHandaler(event) {
        setDate(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate,
        };
        console.log(productData);
        setTitle('');
        setDate('');
    }

  
    return (
        <form onSubmit={submitHandler}>
            <diV className='new-product_title'>
                <label> Title </label>
                <input type='text' value={newTitle}onChange={titleInputHandaler}></input>
            </diV>
            <div className='new-product_date'>
                <label> Date </label>
                <input type='date' min='2024-04-15' max='2024-12-12' value={newDate}onChange={dateInputHandaler}></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}
export default ProductForm;