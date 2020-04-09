import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

export class MoviesContainer extends Component {
    render(){
        const {movies} = this.props
        let content = ''
        let errorMessage  = 'Could not find any movies'
        content = movies.Response === "True" ? movies.Search.map((movie,index) => <MovieCard key= { index } movie = { movie }/>) : <h3 className="ml-4 text-center">{errorMessage}</h3>
        return(
            <div className="row">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies:state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer)