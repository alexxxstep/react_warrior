import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/movie';
import './index.css'

const movie = {
    title: 'Star Warts',
    vote_avarage: 8.2,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61hAryrDRgL.jpg',
    overview:
        'The Star Wars canon fictional universe spans multiple eras, including three focused around each of the film trilogies'

}



function App() {
    return (
        <div>
            <Movie data={movie} />
        </div>
    );
}



ReactDOM.render(<App />, document.getElementById('root'));

