import React, { Component } from 'react'
import {Postlist} from './'

export default class Home extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
               <Postlist posts={this.props.posts}/> 
            </div>
        )
    }
}
