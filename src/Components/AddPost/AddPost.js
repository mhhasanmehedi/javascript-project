import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddPost.scss';
import icon from '../../img/file-icon.png';
import Swal from 'sweetalert2';

const AddPost = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState('');
  const onSubmit = (data) => {
    const postData = {
      title: data.title,
      liveLink: data.liveLink,
      githubLink: data.githubLink,
      imgURL: imageURL,
      date: new Date().toDateString(),
    };

    fetch(`http://localhost:5000/addPost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }).then((res) => console.log('server side response', res));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set('key', '2d6dc2584b64360c816207dbdb6287ea');
    imageData.append('image', event.target.files[0]);

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then((res) => {
        setImageURL(res.data.data.display_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='post__form container'>
      <h2>Add Your Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Enter Your Project Title'
          {...register('title', { required: true })}
        />

        <input
          type='text'
          placeholder='Enter Your Project Live Link'
          {...register('liveLink', { required: true })}
        />

        <input
          type='text'
          placeholder='Enter Your Project Github Link'
          {...register('githubLink', { required: true })}
        />
        <label htmlFor='file'>
          Upload file <img src={icon} alt='file Upload icon' />
        </label>
        <input
          style={{ display: 'none' }}
          id='file'
          type='file'
          onChange={handleImageUpload}
        />

        {imageURL ? <input type='submit' /> : <input type='submit' disabled />}
      </form>
    </div>
  );
};

export default AddPost;
