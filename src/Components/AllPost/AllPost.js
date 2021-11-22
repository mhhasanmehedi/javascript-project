import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './AllPost.scss';

const AllPost = () => {
  const [AllPost, setAllPost] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts/')
      .then((res) => res.json())
      .then((data) => setAllPost(data));
  }, []);

  const handleDelete = (id, event) => {
    console.log(event.target.parentNode.parentNode);
    fetch(`http://localhost:5000/postDelete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          event.target.parentNode.parentNode.style.display = 'none';
        }
      });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='container'>
      <h2>All Post</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Live Link</th>
            <th>Github Link</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {AllPost.map((post) => (
            <tr key={post._id}>
              <td>#</td>
              <td>{post.title}</td>
              <td>{post.liveLink}</td>
              <td>{post.githubLink}</td>
              <td className='deleteBtn'>
                <button onClick={(event) => handleDelete(post._id, event)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPost;
