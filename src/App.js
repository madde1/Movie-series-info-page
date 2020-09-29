import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom' 
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingHome from './components/home-page/LandingHome'
import Landingecommerce from './components/home-ecommerce/Landingecommerce'
import Landing from './components/home-movie/Landing'
import Movie from './components/home-movie/Movie'
import store from './store'


class App extends Component{
    render(){
        return(
        <Provider store ={store}>
            <Router> 
                <div>
                    <Navbar />
                    <Route exact path="/" component={LandingHome}/>
                    <Route exact path="/movie-tvseries-search/" component={Landing} />
                    <Route exact path="/ecommerce/" component={Landingecommerce} />
                    <Route exact path="/movie/:id" component={Movie} />
                    <Footer />
                </div>
            </Router> 
        </Provider>
        
        )
    }
}
export default App