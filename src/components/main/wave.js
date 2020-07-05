import React from 'react';
import '../../App.css';
function Wave() {

    return (
        <div className="wave" >
            <svg id="wave" xlinkHref="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 426.667">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Background" width="1920" height="426.667" fill="none" />
                    </clipPath>
                </defs>
                <rect id="Background-2" data-name="Background" width="1920" height="426.667" fill="none" />
                <g id="wave-2" data-name="wave" clip-path="url(#clip-path)">
                    <path id="Shape" d="M0,0,64,28.4c64,28.933,192,84.933,320,135.2,128,49.733,256,92.4,384,49.733S1024,42.667,1152,42.667s256,128,384,156.4C1664,228,1792,156,1856,120.933l64-35.6v256H0Z" transform="translate(0 85.333)" fill="#f3f4f5" />
                </g>
            </svg>

        </div>
    );
}

export default Wave;
