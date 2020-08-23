import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import  Dishdetail from "./DishdetailComponent"

class Menu extends Component {
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
    renderComment(dish){
        if(dish!=null){
            const comm = dish.comments.map((comment) => {
                return(
                    <div>
                        <p>{comment.comment}</p>  
                        <p>--{comment.author} , {comment.date}</p>
                      
                    </div>
                );
            });
            return(
                <div>{comm}</div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
        }
    renderDish(dish){
       
        if(dish!=null){
            return(
                <div >
                    <Dishdetail dishInfo={dish}/>
                </div>
            );
        }
        else{
            return(
                <dis></dis>
            );
        }
    }

    render() {
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
                <div className='col-md-5 col-12 m-1'>
                    {this.renderDish(this.state.selectedDish)}    
                </div>
                <div className='col-md-5 col-12 m-1'>
                    <h4>Comments</h4>
                    {this.renderComment(this.state.selectedDish)}
                </div>
            </div>
          </div>
        );
    }
}

export default Menu;