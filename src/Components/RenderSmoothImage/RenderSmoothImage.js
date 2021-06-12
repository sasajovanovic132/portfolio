


// RenderSmoothImage.jsx
import myPhoto from '../Home/myPhoto.JPG';
import React from 'react';
import './RenderSmoothImage.css';

function RenderSmoothImage({ src, alt, width, height }) {


    const [imageLoaded, setImageLoaded] = React.useState(false);

    return (
        <div className="smooth-image-wrapper">
            <img
                height={height}
                width={width}
                height={height}
                src={src}
                alt={alt}
                className={`smooth-image image-${imageLoaded ? 'visible' : 'hidden'
                    }`}
                onLoad={() => { setImageLoaded(true) }}
            />
            {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="loader" />
                </div>
            )}
        </div>
    )
}
export default RenderSmoothImage;
