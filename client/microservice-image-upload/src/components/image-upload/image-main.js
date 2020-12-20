import React, { useState, useCallback, useEffect } from 'react';
import Upload from "./uploads";
import Gallery from "./Gallary"
import '../../App.css';

function transformUploads(uploads) {
  return uploads.map(u => ({
    original: u.imageUrl,
    thumbnail: u.thumbnailUrl
  }));
}

function ImageMain() {
  const [images, setImages] = useState(null);

  const fetchUploads = useCallback(() => {
    fetch('http://localhost:5000/api/uploads', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
      .then(response => response.json().then(data => setImages(transformUploads(data))))
      .catch(console.error)
  }, []);

  useEffect(() => {
    fetchUploads();
  }, [fetchUploads])

  return (
    <>
      <div className="container">
        <div className="upload-container">
          <Upload fetchUploads={fetchUploads} />
        </div>
      </div>
      <div className="container">
        <div className="gallery-container">
          {images && images.length ? (
            <Gallery images={images} />
          ) : null}
        </div>
      </div>
    </>
  );
}
export default ImageMain;