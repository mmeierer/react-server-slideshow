import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

const testData = {
    folder: "unit1",
    unitPath: "./source/unit1/",
    slides: [
        "Slide1.jpeg",
        "Slide2.jpeg",
        "Slide3.jpeg",
        "Slide4.jpeg",
        "Slide5.jpeg",
        "Slide6.jpeg",
        "Slide7.jpeg",
        "Slide8.jpeg",
        "Slide9.jpeg",
        "Slide10.jpeg",
        "Slide11.jpeg"
    ],
    slidesPaths: [
        "unit1/Slide1.jpeg",
        "unit1/Slide2.jpeg",
        "unit1/Slide3.jpeg",
        "unit1/Slide4.jpeg",
        "unit1/Slide5.jpeg",
        "unit1/Slide6.jpeg",
        "unit1/Slide7.jpeg",
        "unit1/Slide8.jpeg",
        "unit1/Slide9.jpeg",
        "unit1/Slide10.jpeg",
        "unit1/Slide11.jpeg"
    ],
    index: "0",
    title: "I am awesome",
    subchaptersTitles: [
        "How good am I?",
        "Why so?",
        "What's next?"
    ],
    subchaptersNumbers: [
        1,
        5,
        8
    ],
    subchaptersSlides: [
        [
            "unit1/Slide1.jpeg",
            "unit1/Slide2.jpeg",
            "unit1/Slide3.jpeg",
            "unit1/Slide4.jpeg"
        ],
        [
            "unit1/Slide5.jpeg",
            "unit1/Slide6.jpeg",
            "unit1/Slide7.jpeg"
        ],
        [
            "unit1/Slide8.jpeg",
            "unit1/Slide9.jpeg",
            "unit1/Slide10.jpeg",
            "unit1/Slide11.jpeg"
        ]
    ],
    url: "./chapter0"
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
