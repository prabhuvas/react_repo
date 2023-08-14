import React from 'react';
import "./Header.css";

const header = () => {
  return (
    <div>
        <header>
            <div className='Header-nav'>
                <div className='Header-brand'>
                    <a href="#">Brand</a>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Education</a>
                        </li>
                        <li>
                            <a href="#">Skills</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  );
}

export default header;