import React from "react";
import Axios from "axios";

export class CartBuyitnow extends React.Component {
  render() {
    return (
      <button
        className="cart__buyitnow"
        onClick={e => {
          let getCookie = cname => {
            var name = cname + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) === " ") {
                c = c.substring(1);
              }
              if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          };
          let parent = e.target.previousSibling;
          Axios.post(`/getOneUser/${getCookie("c3a4d")}`).then(res => {
            let sendData = [];
            let allFilled = true;
            let priceSumm = 0;
            let amountMessage = false;
            for (let i = 0; i < res.data.cart.length; i++) {
              let amountInp = parent.childNodes[i].childNodes[2].childNodes[1];
              let productTitle = parent.childNodes[i].childNodes[1].innerHTML;
              if (
                amountInp.value[0] === "M" ||
                amountInp.value === "" ||
                amountInp.value === "0" ||
                Number(amountInp.value) < 0
              ) {
                allFilled = false;
                amountInp.value = "";
                break;
              } else {
                let obj = {
                  amount: amountInp.value,
                  productId: res.data.cart[i]._id,
                  title: productTitle
                };
                sendData.push(obj);
                let productPrice = Number(
                  parent.childNodes[i].childNodes[3].innerHTML.split("$")[0]
                );
                let amountHalder = Number(amountInp.value);
                if (amountHalder > res.data.cart[i].amount) {
                  amountMessage = `Sorry you can't buy ${amountHalder} ${
                    res.data.cart[i].title
                  }`;
                }
                let summ = productPrice * amountHalder;
                priceSumm += summ;
              }
            }
            if (!allFilled) {
              alert("Fill all inputs or Enter valid quantity");
            } else if (priceSumm > res.data.balance) {
              alert("not enought money");
            } else if (amountMessage) {
              alert(amountMessage);
            } else {
              let buyData = {
                spendMoney: priceSumm,
                userId: res.data._id,
                products: sendData
              };
              Axios.post("/buyProduct", buyData).then(buy => {
                alert(buy.data.message);
                this.props.stater(buy.data.cart);
                this.props.baanceStater(buy.data.balance);
                this.props.historyStater(buy.data.history);
              });
            }
          });
        }}
      >
        buy it now
      </button>
    );
  }
}
