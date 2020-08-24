import React,{Component} from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

class Dishdetail extends Component{
    constructor(props) {
        super(props);
        this.state ={
            selectedDish: null
        }
        console.log("Menu constructor call");
    }

    componentDidMount(){
        console.log("Menu componentDidMount call");
    };
    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }
   
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
    const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                      <CardImg width="100%" object src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                     <CardTitle>{dish.name}</CardTitle> 
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        console.log("Menu Render call");
        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className="row">
                    {this.renderDish(this.state.selectedDish)}    
                    {this.renderComment(this.state.selectedDish)}
            </div>
          </div>
        );
}
}

export default Dishdetail;