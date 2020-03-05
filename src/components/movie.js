import React, { Component } from 'react';


function Image(props) {
    // console.log('Image props', props);
    return <img width='100%' src={props.src} alt={props.alt} />

}


class Movie extends Component {

    constructor() {
        super()
        this.state = {
            show: false,
            like: false
        }
    }

    toggleOverview = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleLike = () => {
        // console.log('like = ', this.state.like);
        this.setState({
            like: !this.state.like
        })
    }

    render() {
        const { data: { title, vote_avarage, image, overview } } = this.props;
        console.log('state = ', this.state);
        // console.log('toggleOverview = ', this.toggleOverview);
        return (

            <div
                style={{
                    width: '250px'
                }} >
                <Image src={image} alt={title} />
                <p>{title}</p>
                <p>{vote_avarage}</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-beetween'
                }}>
                    <button type='button'
                        onClick={this.toggleOverview}>{this.state.show ? "hide" : 'show'}</button>
                    <button
                        type='button'
                        onClick={this.handleLike}
                        className={this.state.like ? 'bnt_like' : ''}
                    >

                        Like</button>
                </div>


                {
                    this.state.show
                        ? <p>{overview}</p> : null
                }
            </div >
        )
    }
}

export default Movie
