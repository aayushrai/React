import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selecteDishes: null,
        };
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    renderDIsh(dish) {
        if (this.props.dish != null) {
            return (
                <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg
                            width="100%"
                            object
                            src={this.props.dish.image}
                            alt={this.props.dish.name}
                        />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
    renderComments(dish) {
        if (this.props.dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <div>
                        <ul className="list-unstyled">
                            <li key={comment.id}>
                                <li>{comment.comment}</li>
                                <li>
                                    -- {comment.author}, {comment.date}
                                </li>{' '}
                            </li>
                        </ul>
                    </div>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        } else {
            return <div></div>;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderDIsh(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}
export default DishDetail;
