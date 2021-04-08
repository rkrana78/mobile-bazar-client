import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState([]);

  const onSubmit = data => {
    const productData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL
    };
    const url = `http://localhost:5100/addProduct`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'fdfe73af7a1143059fe937d40ab59952');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="form-container">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="pd-name">Product Name</label>
        <br />
        <input className="form-control w-50" placeholder="enter name" id="pd-name" {...register("name")} />
        <br />
        <label htmlFor="pd-price">Add Price</label>
        <br />
        <input className="form-control w-50" id="pd-price" {...register("price", { required: true })} />
        <br />
        <label htmlFor="pd-photo">Add Photo</label>
        <br />
        <input className="form-control w-50" id="pd-photo" type="file" onChange={handleImageUpload} />
        <br />
        <input className="btn btn-success mt-1 px-4" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
