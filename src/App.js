import React from "react";
import axios from "axios";
import linkdin from "./Assets/linkdin.png";
import SubHeader from "./components/SubHeader";
function App() {
  const [products, setProducts] = React.useState([]);
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];
  React.useEffect(() => {
    const getProducts = async () => {
      const Products = await axios.get("https://fakestoreapi.com/products");
      setProducts(Products.data);
    };
    getProducts();
  }, []);
  return (
    <div className="">
      <header class="LoginNavBar">
        <nav class="LoginNavBarLeft">
          <p>
            <img
              src={require("./Assets/Layer 156.png")}
              style={{ marginTop: "7px" }}
            />
          </p>
          <p>Free Delivery</p>
          <p>
            <hr style={{ border: "1px solid #626262", height: "20px" }} />
          </p>
          <p>Return Policy</p>
        </nav>
        <nav class="LoginNavBarRight">
          <p>Login</p>
          <p id="followUs">Follow US</p>
          <div className="LoginNavBarIcons">
            <img src={require("./Assets/Vector.png")} />
            <img src={require("./Assets/linkdin.png")} />
            <img src={require("./Assets/twitter.png")} />
            <img src={require("./Assets/insta.png")} />
          </div>
        </nav>
      </header>
      <div className="subheader-content">
        <SubHeader></SubHeader>
      </div>
      <div class="Wishlist_Bar">
        <nav class="Wishlist_Bar_Left">
          <p>ShopKart</p>
        </nav>
        <nav class="Wishlist_Bar_Right">
          <p>
            <b>WISHLIST (0)</b>
          </p>
          <p>
            <b>BAG (0)</b>
          </p>
        </nav>
        <i class="ri-menu-line"></i>
        <i class="ri-close-line"></i>
      </div>
      <hr id="wishlist_hr"/>
      <img id="star1" src={require("./Assets/Star 1.png")} />
      <div class="navbar">
        <nav>
          <ul>
            {navbar.map((nav) => (
              <>
                <li
                  className="list-item"
                  key={nav.id}
                  style={{ position: "relative" }}
                >
                  <b>{nav.name}</b>
                  {nav.child && nav.child.length > 0 ? (
                    <div
                      style={{ position: "absolute", top: 0 }}
                      className="child-list"
                    >
                      {nav.child.map((subNav) => (
                        <li key={subNav.id}>
                          <b>{subNav.name}</b>
                        </li>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              </>
            ))}
          </ul>
        </nav>
      </div>
      <main class="maindiv">
        <div class="Banner">
          <div id="bannertext1">Fresh</div>
          <div id="banneryear">2022</div>
          <div id="bannertext2">Look</div>
          <div class="star3">
            <img id="star3image" src={require("./Assets/Star 3.png")} />
          </div>
          <div class="bannermodel">
            <img
              id="bannermodelimage"
              src={require("./Assets/jessica-radanavong-IchPBHFD0pw-unsplash.png")}
            />
          </div>
          <div class="bannershape">
            <img
              id="bannershapeimage"
              src={require("./Assets/Rectangle 29.png")}
            />
          </div>
          <div id="bannertext3">
            OREGON JACKET
            <br />
            $124
          </div>
          <hr id="bannerhr" />
          <div class="star4">
            <img src={require("./Assets/Star 4.png")} />
          </div>
          <div class="seemorediv">
            <p id="seemore">
              See more&nbsp;<b>&#8599;</b>
            </p>
          </div>
        </div>
      </main>
      <main>
        <div class="newproduct">
          <div>
            <h1 class="newproductheading">New products</h1>
            <hr
              id="newproducthr"
              style={{
                border: "1px solid #161615",
                marginTop: "-5px",
                marginBottom: "-35.8px",
              }}
            />
            <img id="star2" src={require("./Assets/Star 2.png")} />
          </div>
          <div class="arrows">
            <img src={require("./Assets/Arrow 2.png")} />
            <img src={require("./Assets/Arrow 1.png")} />
          </div>
        </div>
        <div class="itemlist">
            <div className="leftlist">
          <ul style={{ listStyle: "nonen" }}>
            <li class="listitems">Apparel</li>
            <li class="listitems">Accessories</li>
            <li class="listitems">Best Sellers</li>
            <li class="listitems">50% off</li>
          </ul>
          </div>
          <div class="container">
            {products.map((product) => (
              <div class="container-item">
                <img src={product.image} style={{height:"20.125em", width:"19.375em"}} />
                <div className="containerimagelogo"><b>&#8599;</b></div>
                <h1 class="containeritemheading">{product.title}</h1>
                <p class="containeritemdiscription">{product.description}</p>
                <h2 class="containeritemheading">$ {product.price}</h2>
              </div>
            ))}
          </div>
          <div class="arrows2">
            <img src={require("./Assets/Arrow 2.png")} />
            <img src={require("./Assets/Arrow 1.png")} />
          </div>
        </div>
      </main>
      <footer class="footer">
        <div>
          <img id="footerimg" src={require("./Assets/18591063.png")} />
          <div class="newslleter">
            <h1 id="newslleterheading">Newslleter</h1>
            <p id="newslleterpara">
              Get news about articles and updates in your inbox.
            </p>
            <div class="getintouch">
              <p>
                GET
                <br /> IN TOUCH
              </p>
            </div>
            <div class="lastfooter">
              <p>Copyright 2022 All Right Reserved By SG</p>
            </div>
          </div>
          <div class="form-container">
            <form action="#" method="post">
              <div class="form-group">
                <label for="name"></label>
                <input type="text" id="name" placeholder="NAME" required />
              </div>
              <div class="form-group">
                <label for="email"></label>
                <input type="email" id="email" placeholder="EMAIL" required />
              </div>
              <div class="form-group">
                <label for="message"></label>
                <textarea
                  id="message"
                  placeholder="MESSAGE"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn-send">
                SEND
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
