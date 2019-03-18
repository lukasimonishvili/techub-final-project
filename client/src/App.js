import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Header } from "./components/header/header";
import { Login } from "./components/login/login";
import { CartContainer } from "./components/cart/cartContainer";
import { Register } from "./components/register/register";
import { Sidebar } from "./components/sidebar/sidebar";
import { fstat } from "fs";

class Test extends Component {
  state = {
    product: {},
    img: [],
    removeImg: [],
    likes: "a",
    disLikes: "b"
  };

  componentDidMount() {
    axios.get(`/getOne/5c8ea94237afb50988b9b630`).then(res => {
      this.setState({
        product: res.data,
        img: res.data.img,
        likes: res.data.likes.length,
        disLikes: res.data.disLikes.length
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <>
        <h2>{this.state.product.title}</h2>
        {this.state.img.map(img => {
          let photo = require(`./img/uploads/${img}`);
          return <img className="test" key={img} alt="" src={photo} />;
        })}
        <p>likes : {this.state.likes}</p>
        <p>dislikes : {this.state.disLikes}</p>
        <button
          className="test3"
          onClick={() => {
            axios
              .post("/likeProducts", {
                productId: "5c8ea94237afb50988b9b630",
                userId: "5c8922ad18854827b4291775"
              })
              .then(res => {
                this.setState({
                  likes: res.data.likes.length,
                  disLikes: res.data.disLikes.length
                });
              });
          }}
        >
          like
        </button>
        <button
          className="test3"
          onClick={() => {
            axios
              .post("/disLikeProduct", {
                productId: "5c8ea94237afb50988b9b630",
                userId: "5c8922ad18854827b4291775"
              })
              .then(res => {
                this.setState({
                  likes: res.data.likes.length,
                  disLikes: res.data.disLikes.length
                });
              });
          }}
        >
          dislike
        </button>
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Test />
        {/* <Header />
        <Sidebar /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <CartContainer /> */}
      </>
    );
  }
}

export default App;
