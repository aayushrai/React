import React,{Component} from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

class Dishdetail extends Component{
constructor(props){
    super(props);
}
render(){
    const dish = this.props.dishInfo;
    return(
    <Card>
        <CardImg top src={dish.image} alt={dish.name}/>
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
    );
}
}

export default Dishdetail;