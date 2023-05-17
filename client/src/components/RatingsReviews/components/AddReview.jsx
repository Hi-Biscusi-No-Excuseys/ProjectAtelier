import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import SelectStars from './SelectStars';

export default function AddReview({
  setShowAddReviewModal, product, characteristics, setReviewAdded,
}) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [activeStar, setActiveStar] = useState(-1);
  const [recommend, setRecommend] = useState(false);
  const [ratings, setRatings] = useState({});
  const [summary, setSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [images, setImages] = useState([]);
  const [localURLs, setLocalURLs] = useState([]);
  const [uploading, setUploading] = useState(false);

  const ratingDescriptions = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  };

  useEffect(() => {
    if (reviewBody.length < 50 || activeStar < 1) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [reviewBody.length, activeStar]);

  useEffect(() => {
    if (images.length < 1) return;
    const newLocalURLs = [];
    images.forEach((image) => newLocalURLs.push(URL.createObjectURL(image)));
    setLocalURLs(newLocalURLs);
  }, [images]);

  function onImageChange(e) {
    if (images.length + e.target.files.length > 5) {
      alert('You can upload up to 5 photos.');
      e.target.value = null;
    } else {
      setImages([...images, ...e.target.files]);
      e.target.value = null;
    }
  }

  function handleRatingChange(id, rating) {
    setRatings({ ...ratings, [id]: rating });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (images.length) {
      setUploading(true);
    }

    const promises = images.map((image) => {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'atelier');
      data.append('cloud_name', 'drlrooot9');
      return axios.post('https://api.cloudinary.com/v1_1/drlrooot9/image/upload', data)
        .then((response) => response.data.url);
    });

    Promise.all(promises)
      .then((urls) => {
        const reqBody = {
          product_id: product.id,
          rating: activeStar,
          summary,
          body: reviewBody,
          recommend,
          name: username,
          email,
          photos: urls,
          characteristics: ratings,
        };

        axios.post('/reviews/', reqBody)
          .then(() => {
            setImages([]);
            setShowAddReviewModal(false);
            setReviewAdded(1);
          })
          .then(() => {
            setUploading(false);
            alert('Review posted!');
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => console.err(err));
  }

  return (
    createPortal(

      <div id="add-review-modal">
        {uploading ? (
          <h3 id="uploading">Uploading photos...</h3>
        ) : (
          <form action="submit" onSubmit={(e) => handleSubmit(e)}>

            <h3>Write Your Review</h3>
            <h4>
              About the
              {' '}
              {product.name}
              {' '}
            </h4>

            <label htmlFor="username">
              Nickname
              <input type="text" name="username" required maxLength="60" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>

            <label htmlFor="email">
              Email
              <input type="email" name="email" required maxLength="60" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>

            <SelectStars activeStar={activeStar} setActiveStar={setActiveStar} />
            <span>
              {(() => {
                switch (activeStar) {
                  case 1:
                    return 'Poor';
                  case 2:
                    return 'Fair';
                  case 3:
                    return 'Average';
                  case 4:
                    return 'Good';
                  case 5:
                    return 'Great';
                  default:
                    return null;
                }
              })()}
            </span>

            <label htmlFor="recommend">
              Do you recommend this product?
              <input type="checkbox" name="recommend" onChange={() => setRecommend(!recommend)} />
            </label>

            {Object.entries(characteristics).map(([characteristic, { id }]) => (
              <div key={id}>
                <h3>{characteristic}</h3>
                <p>{ratings[id] ? ratingDescriptions[characteristic][ratings[id] - 1] : 'None selected'}</p>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating} htmlFor={characteristic}>
                    <input
                      type="radio"
                      name={characteristic}
                      value={rating}
                      checked={ratings[id] === rating}
                      onChange={() => handleRatingChange(id, rating)}
                    />
                    {rating}
                  </label>
                ))}
                <p>
                  {ratingDescriptions[characteristic][0]}
                  {' '}
                  to
                  {' '}
                  {ratingDescriptions[characteristic][4]}
                </p>
              </div>
            ))}

            <label htmlFor="summary">
              Review Summary
              <input type="text" name="summary" required value={summary} onChange={(e) => setSummary(e.target.value)} maxLength="60" placeholder="Best shades ever 😎" />
            </label>

            <label htmlFor="review-body">
              Review
              <textarea type="text" name="review-body" required value={reviewBody} onChange={(e) => setReviewBody(e.target.value)} maxLength="1000" placeholder="Why did you like the product or not?" />
            </label>
            <p>{reviewBody.length < 50 ? `${50 - reviewBody.length} required characters left` : 'Minimum reached'}</p>

            <input type="file" multiple accept="image/*" onChange={onImageChange} />
            <div id="image-upload-thumbs">{ localURLs.map((src) => <img src={src} alt="" />)}</div>

            <button type="submit" disabled={submitDisabled}>Submit</button>

            <button type="button" onClick={() => setShowAddReviewModal(false)}>Close</button>
          </form>

        )}
      </div>,
      document.body,
    )
  );
}
