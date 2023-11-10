import React from 'react';
import './MenuPage.css';

const MenuPage = () => {
  return (
    <div id="MenuPage" className="container mt-5">
      <h1 className="text-center" style={{ color: 'brown', fontStyle: 'italic' }}>
        Our Bakery Menu
      </h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card" id="card">
            <img
              src="https://www.davidovichbakery.com/wp/wp-content/uploads/2018/01/Davidovich-Bakery-13-web.jpg"
              className="card-img-top"
              alt="Item 1"
            />
            <div className="card-body" style={{ color: 'brown' }}>
              <h5 className="card-title">BAGEL</h5>
              <p className="card-text"style={{ color: 'brown', fontStyle: 'italic' }}>
                These freshly baked, golden-brown delights are perfectly crispy
              </p>
              <p className="card-text"style={{ color: 'brown', fontStyle: 'italic' }}>R12.99</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1066842278/photo/danish-cinnamon-rolls-with-a-glas-of-milk-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=DmeSOXV96GFsB97WXcC2wQfrfkHeoScNPT1bs2_lu2o="
              className="card-img-top"
              alt="Item 2"
            />
            <div className="card-body" style={{ color: 'brown' }}>
              <h5 className="card-title">Chealsea bun</h5>
              <p className="card-text"style={{ color: 'brown', fontStyle: 'italic' }}>
                Experience the irresistible delight of our Chelsea Buns, freshly baked to perfection
              </p>
              <p className="card-text">R12.99</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/delicious-glazed-doughnuts-arrangement_23-2150674022.jpg?size=626&ext=jpg&ga=GA1.2.783724358.1697279446&semt=ais"
              className="card-img-top"
              alt="Item 3"
              style={{ height: "250px" }}
            />
            <div className="card-body" style={{ color: 'brown' }}>
              <h5 className="card-title">Doughnuts</h5>
              <p className="card-text"style={{ color: 'brown', fontStyle: 'italic' }}>Delight in the irresistible indulgence of our delectable doughnuts.</p>
              <p className="card-text"style={{ color: 'brown', fontStyle: 'italic' }}>R22.99</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <img
              src="https://www.onceuponachef.com/images/2019/04/Lemon-Pound-Cake-10-scaled.jpg"
              className="card-img-top"
              alt="Item 4"
              style={{height:"250px"}}
            />
            <div className="card-body" style={{ color: 'brown' }}>
              <h5 className="card-title">Lemon Cake</h5>
              <p className="card-text" style={{ color: 'brown', fontStyle: 'italic' }}>
                Bursting with the tangy goodness of freshly squeezed lemons.
              </p>
              <p className="card-text">R23.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
