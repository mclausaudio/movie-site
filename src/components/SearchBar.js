import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchText: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            searchText: e.target.value
        })
    }

    render(){
        let searchRoute = `/${this.state.searchText}`
        let style={
            width: '100%'
        }
        return (
            <div class="input-group">
                <div class="input-group-append">
                    <form>
                        <label>Search Movies:
                            <input 
                                type="text" 
                                value={this.state.searchText} 
                                onChange={this.handleChange} 
                                placeholder="Movie Title" 
                                style={style}
                            />
                        </label>
                        
                            <Link className='btn btn-outline-secondary' to={searchRoute} >Click here to search</Link>
                        
                    </form>
                </div>
            </div>
        )
    }
}


//   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
//   <div class="input-group-append">
//     <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
//   </div>

export default SearchBar;