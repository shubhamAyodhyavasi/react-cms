// AdminLogin.js
import React, { Component } from 'react'

class Dashboard extends Component {
    componentDidMount(){
        console.log(this.props)
        if(true)
            this.props.history.push("/admin/login")
    }
    render(){
        return <div></div>
    }
}

export default Dashboard