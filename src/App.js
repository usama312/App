import React, { Component } from 'react';
//import logo from './logo.svg';
import table from './table.svg';
import './App.css';


class App extends Component {
  constructor (props){
    super (props);
    this.state = {
      products: [
        {
          key: "1",
          name: "Product1",
          size: "Large",
          addedToCart: false,
        },
        {
          key: "2",
          name: "Product2",
          size: "Large",
          addedToCart: false,
        },
        {
          key: "3",
          name: "Product3",
          size: "Large",
          addedToCart: false,
        },
        {
          key: "4",
          name: "Product4",
          size: "Large",
          addedToCart: false,
        },
        {
          key: "5",
          name: "Product5",
          size: "Large",
          addedToCart: false,
        },
      ]
    }
  }

  addItemToCart = (event, key) => {
    console.log('Add to Cart Items');
    const { products } = this.state;
    const newArray = products.map((item) => {
        if (item.key === key) {
          // const obj = Object.assign({}, item); // To be discussed
          item.addedToCart = item.addedToCart ? false : true;
          return item;
        }
        return item;
      });
      console.log('new array: ', newArray);
      this.setState({
        products: newArray
      })
  }

  addedtoWishlist = (event, key) => {
    console.log('Add to WishList Items');
    const { products } = this.state;
    const newArray = products.map((item) => {
        if (item.key === key) {
          // const obj = Object.assign({}, item); // To be discussed
          item.addedtoWishlist = item.addedtoWishlist ? false : true;
          return item;
        }
        return item;
      });
      this.setState({
        products: newArray
      })
  }

  countInCart = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach (
      (item) => {
        if(item.addedToCart){
          count++;
        }
      }
    )
    return count;
  }

  countInWishlist = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach (
      (item) => {
        if(item.addedtoWishlist){
          count++;
        }
      }
     )
     return count;
  }

  render() {
    return (
      <div>
        <div> <h3>Items in cart are:</h3> {this.countInCart()} </div>
        <div> <h3>Items in WishList are:</h3> {this.countInWishlist()} </div>

        {
          this.state.products.map((item) =>

            <div key={item.key}>

              <ul>
                <li>
                  <div>

                    <h4>PRODUCT</h4>
                    <img src={table} /><br />
                    Name is : {item.name}<br />
                    Size is : {item.size}<br />

                    {
                      item.addedToCart ?
                      <button
                        style={ {backgroundColor: 'red'} }
                        onClick={(event) => this.addItemToCart(event, item.key)}>
                        Add to cart
                      </button> :
                      <button
                        style={ {backgroundColor: 'blue'} }
                        onClick={(event) => this.addItemToCart(event, item.key)}>
                        Add to cart
                      </button>
                    }

                    {
                      item.addedtoWishlist ?
                      <button style={ {backgroundColor: 'yellow'} }
                              onClick={(event) => this.addedtoWishlist(event, item.key)}>
                        Add to wishlist
                      </button> :
                      <button style={ {backgroundColor: 'green'} }
                              onClick={(event) => this.addedtoWishlist(event, item.key)}>
                        Add to wishlist
                      </button>
                    }

                    </div>
                  </li>
                </ul>
              </div>
            )
          }
        </div>
      )
    }
}

export default App;



































// //arrow function
// thisIsAnArrowFunction = (parameterToBePassed) => {
//
// }
//
// //String Literals
// let name='Usama';
// console.log('Hello Mr' + name + 'How are you?');
// console.log(`Hello ${name} How are you?`);
//
// //spread operator
// addNumbers = (a, b, c) => {
//   return a+b+c;
// }
// var nums = [3, 4, 5];
// addNumbers(...nums);
//
// var meat = ['chicken' , 'mutton'];
// var fruits = ['apple', ...meat 'orange', 'mango'];
//
//
//
//
//
//
// document.write();
// console.log();
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //Hello 09-may-2018
//
// countInCART = () => {
//     const { products} = this.state;
//     let count = 0;
//     products.forEach (
//       (item) => {
//         if (item.addedToCart){
//           count++;
//         }
//       }
//     )
//     return count;
// }
//
// countInWISHLIST = () => {
//   const { products } = this.state;
//   let count =0;
//   products.forEach (
//     (item) => {
//       if (item.addedtoWishlist){
//         count++;
//       }
//     }
//   )
//   return count;
// }
