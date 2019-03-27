import React from "react";
import Axios from "axios";
import swal from "sweetalert";

export class ProductListItemProduct extends React.Component {
  state = {
    item: {
      img: this.props.product.img,
      title: this.props.product.title,
      price: this.props.product.price,
      description: this.props.product.description,
      amount: this.props.product.amount,
      _id: this.props.product._id,
      category: this.props.product.category
    },
    removeImg: []
  };

  render() {
    return (
      <div className="productlist__edit">
        <input type="hidden" defaultValue={this.state.item._id} />
        <div className="productlist__edit__images fl fl_jus_bet">
          {this.state.item.img.map(img => {
            let photo = require(`../../../../img/uploads/${img}`);
            return (
              <div key={img} className="productlist__edit__images--item">
                <img
                  alt=""
                  src={photo}
                  onClick={e => {
                    e.target.classList.toggle(
                      "productlist__edit__images--opacity"
                    );
                    let checkList = true;
                    let list = this.state.removeImg;
                    for (let i = 0; i < list.length; i++) {
                      if (img == list[i]) {
                        checkList = false;
                        list.splice(i, 1);
                        this.setState({ removeImg: list });
                        break;
                      }
                    }
                    if (checkList) {
                      let newList = this.state.removeImg;
                      newList.push(img);
                    }
                    console.log(this.state.removeImg);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="additem">
          <input
            className="additem__upload"
            type="file"
            multiple
            accept="image/png, image/jpeg"
            name="upliad images"
            placeholder="upliad images"
          />
          <input
            defaultValue={this.state.item.title}
            className="additem__name"
            type="text"
            name="product name"
            placeholder="product name"
          />
          <select
            defaultValue={this.state.item.category}
            className="additem__category"
            name="product category"
          >
            {this.props.catList.map(cat => {
              return (
                <option key={cat._id} value={cat.title}>
                  {cat.title}
                </option>
              );
            })}
          </select>
          <input
            className="additem__description"
            name="product description"
            placeholder="product description"
            defaultValue={this.state.item.description}
          />
          <input
            className="additem__quantity"
            type="number"
            placeholder="product quantity"
            defaultValue={this.state.item.amount}
            onKeyUp={e => {
              if (Number(e.target.value) < 1) {
                e.target.value = 1;
              }
            }}
          />
          <input
            className="additem__cost"
            type="number"
            placeholder="product cost"
            defaultValue={this.state.item.price.split("$")[0]}
          />
          <button
            className="additem__send"
            onClick={e => {
              let title =
                e.target.previousSibling.previousSibling.previousSibling
                  .previousSibling.previousSibling;
              let description =
                e.target.previousSibling.previousSibling.previousSibling;
              let category =
                e.target.previousSibling.previousSibling.previousSibling
                  .previousSibling;
              let img =
                e.target.previousSibling.previousSibling.previousSibling
                  .previousSibling.previousSibling.previousSibling;
              let price = e.target.previousSibling;
              let amount = e.target.previousSibling.previousSibling;
              let removeList = this.state.removeImg;
              let fd = new FormData();
              fd.append("title", title.value);
              fd.append("description", description.value);
              fd.append("category", category.value);
              fd.append("price", price.value);
              fd.append("amount", amount.value);
              fd.append("removeList", removeList);
              for (let i = 0; i < img.files.length; i++) {
                fd.append("img", img.files[i]);
              }
              fd.append("img", img.files);
              swal({
                title: "Are you sure",
                text: "to update this changes?",
                buttons: true
              }).then(willUpdate => {
                if (willUpdate) {
                  Axios.post(`/editProduct/${this.state.item._id}`, fd, {
                    headers: {
                      "Content-type": "multipart/form-data"
                    }
                  }).then(res => {
                    swal(res.data.message, {
                      icon: "success"
                    });
                    this.setState({ item: res.data.data });
                  });
                }
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
