import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import  Dishdetail from "./DishdetailComponent"

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <Dishdetail dishes={this.props.dishes} />
        );
    }
}

export default Menu;