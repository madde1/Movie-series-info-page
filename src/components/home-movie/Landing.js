import React, {Component} from 'react'
import SearchForm from './SearchForm'
import Spinner from '../layout/Spinner'
import MoviesContainer from './MoviesContainer'
import { connect } from 'react-redux'

class Landing extends Component {
    render(){
        const { loading } = this.props
        return(
            <div>
                <div className="mt-5 bg-black  p-3">
                    <p class="neon-text">Filmer och Serier</p>
                </div>
                <div className="container margin-l">
                    <SearchForm />
                    {  loading ? <Spinner /> : <MoviesContainer />}
                </div>
            </div>
           
        )
    }
}

const mapStateToProps = state =>({
    loading:state.movies.loading
})

export default connect(mapStateToProps)(Landing)