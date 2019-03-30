import React from "react";
import Axios from "axios";
import swal from "sweetalert";

export class Soldout extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    Axios.post("/soldoutProducts").then(res => {
      this.setState({ products: res.data });
    });
  }

  stater(productId) {
    let newList = this.state.products;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i]._id == productId) {
        newList.splice(i, 1);
      }
    }
    this.setState({ products: newList });
  }

  render() {
    return (
      <div className="soldout">
        {this.state.products.map(prod => {
          return (
            <div key={prod._id} className="soldout__container fl fl_jus_bet">
              <img
                className="soldout__image"
                src={require(`../../../../img/uploads/${prod.img[0]}`)}
              />
              <span className="soldout__name">{prod.title}</span>
              <input
                className="soldout__number"
                defaultValue={prod.amount}
                type="number"
              />
              <div className="soldout__buttons">
                <button
                  className="soldout__save"
                  onClick={e => {
                    let newAmount = e.target.parentNode.previousSibling.value;
                    if (
                      e.target.parentNode.previousSibling.value.length &&
                      Number(e.target.parentNode.previousSibling.value)
                    ) {
                      swal({
                        title: "Are you sure?",
                        buttons: ["Cancel", "Save"]
                      }).then(willSave => {
                        if (willSave) {
                          let fd = new FormData();
                          fd.append("title", prod.title);
                          fd.append("description", prod.description);
                          fd.append("category", prod.category);
                          fd.append("price", prod.price);
                          fd.append("amount", Number(newAmount));
                          fd.append("removeList", []);
                          fd.append("img", []);
                          Axios.post(`/editProduct/${prod._id}`, fd).then(
                            () => {
                              swal({ title: "Saved", icon: "success" });
                              this.stater(prod._id);
                            }
                          );
                        }
                      });
                    }
                  }}
                >
                  Save
                </button>
                <button
                  className="soldout__delete"
                  onClick={() => {
                    swal({
                      title: "Are you sure?",
                      text: `Removing ${
                        prod.title
                      } also removs it from users cart!`,
                      dangerMode: true,
                      buttons: ["Cancel", "Delete"]
                    }).then(willRemove => {
                      if (willRemove) {
                        if (willRemove) {
                          Axios.post("/removeProduct", {
                            productId: prod._id
                          }).then(res => {
                            swal(res.data.message, {
                              icon: "success"
                            });
                            this.stater(prod._id);
                          });
                        }
                      }
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
