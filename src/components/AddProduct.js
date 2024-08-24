import React, { useState } from 'react';

const AddProduct =()=> {
    const [name, setName] = React.useState('');                             //onChange will be use to set the name price category and company in useState
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState('');

    const addProduct= async ()=>{
        console.warn(!name);
        if(!name || !price || !category || !company)
        {
            setError(true)
            return false;                                                   //return false se sirf wahi tak code execute hoga uske aage nahi hoga
        }    
                                  

        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method: 'POST',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.warn(result)
    };
    
    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter product name" className='inputBox'
            value={name} onChange={(e)=>{setName(e.target.value)}}
            />
            {error && !name && <span className='invalig-input'>Enter valid name</span>}

            <input type="text" placeholder="Enter product price" className='inputBox'
            value={price} onChange={(e)=>{setPrice(e.target.value)}}
            />
            {error && !price && <span className='invalig-input'>Enter valid price</span>}

            <input type="text" placeholder="Enter product category" className='inputBox'
            value={category} onChange={(e)=>{setCategory(e.target.value)}}
            />
            {error && !category && <span className='invalig-input'>Enter valid category</span>}

            <input type="text" placeholder="Enter product company" className='inputBox'
            value={company} onChange={(e)=>{setCompany(e.target.value)}}
            />
            {error && !company && <span className='invalig-input'>Enter valid company</span>}

            <button onClick={addProduct} className='appbutton' style={{color: 'white'}}>Add Product</button>
        </div>
    )
}

export default AddProduct;
