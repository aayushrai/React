import React,{Component} from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'

class Dishdetail extends Component{

renderDish(dish){
       
    if(dish!=null){
        return(
            <div className='col-md-5 col-12 m-1'>
                 <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else{
        return(
            <dis></dis>
        );
    }
}
renderComment(dish){
    if(dish!=null){
        const comm = dish.comments.map((comment) => {
            return(
                <div>
                    <ul className="list-unstyled">
                        <li key={comment.id}>
                            <li>{comment.comment}</li>
                            <br></br>
                            <li>
                                -- {comment.author}, {comment.date}
                            </li>{' '}
                        </li>
                    </ul>
                </div>
            );
        });
        return(
            <div className='col-md-5 col-12 m-1'>
                <h4>Comments</h4>
                {comm}
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
    }
render(){
        console.log("Menu Render call");
        return (
            <div className="container">
            <div className="row">
                    {this.renderDish(this.props.dish)}    
                    {this.renderComment(this.props.dish)}
            </div>
            </div>
            
        );
}
}

export default Dishdetail;