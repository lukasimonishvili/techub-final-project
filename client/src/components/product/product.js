import React from "react";
import { Comment } from "../comment/comment";
import { Feedback } from "../feedback/feedback";
import { ProductInfoImageContainer } from "./productInfo&productImageContainer";
import Axios from "axios";
import { Soldout } from "./soldout";

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.likeStateHandler = this.likeStateHandler.bind(this);
    this.disLikeStateHandler = this.disLikeStateHandler.bind(this);
    this.imgStateHander = this.imgStateHander.bind(this);
  }

  state = {
    product: {},
    img: [],
    mainImg: [],
    likes: 0,
    disLikes: 0
  };

  likeStateHandler(value) {
    this.setState({ likes: value });
  }

  disLikeStateHandler(value) {
    this.setState({ disLikes: value });
  }

  imgStateHander(value1, value2) {
    this.setState({ mainImg: value1, img: value2 });
  }

  componentDidMount() {
    Axios.get(`/getOne/${this.props.productId}`).then(res => {
      this.setState({
        mainImg: [res.data.img[0]],
        product: res.data,
        img: res.data.img,
        likes: res.data.likes.length,
        disLikes: res.data.disLikes.length
      });
    });
  }
  render() {
    return (
      <div className="product">
      <Soldout/>
        <ProductInfoImageContainer
          imgStateHander={this.imgStateHander}
          mainImg={this.state.mainImg}
          images={this.state.img}
          price={this.state.product.price}
          amount={this.state.product.amount}
          productName={this.state.product.title}
          description={this.state.product.description}
          likes={this.state.likes}
          disLikes={this.state.disLikes}
          likeStater={this.likeStateHandler}
          disLikeStater={this.disLikeStateHandler}
          productId={this.state.product._id}
        />
        <Comment productId={this.props.productId} />
        <Feedback />
      </div>
    );
  }
}
