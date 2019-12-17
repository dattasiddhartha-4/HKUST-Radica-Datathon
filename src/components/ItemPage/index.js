import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.sass';

var img;

class ItemPage extends Component {
  constructor(props, context) {
    super(props, context);

    img = window.location.href.replace('item/', '') + '.jpg';
    console.log(img);

    this.importAll = this.importAll.bind(this);
  }

  importAll(r) {
    return r.keys().map(r);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }

  render() {    
    const array = this.importAll(require.context('./../../assets/images/dummy', false, /\.(png|jpe?g|svg)$/));

    return (
      <div>
        <a className="backLink" href="javascript:history.back()">
          <span className="small">
            <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10l5 5 5-5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </span>All Items
        </a>
        <div className="itemPageWrapper">
          <div className="itemImgWrapper">
            <span> {img .replace('http://localhost:8080/', '').replace('.jpg', '').split('_').join(' ')
                        .toUpperCase()} </span>
            <img key={img} src={img} alt=""/>
          </div>
          <div className="itemInfoWrapper">
            <span style={{width: '100%'}}>Popular Sites</span>
            { array.map(image =>
              <div className="itemImgSmallWrapper" onClick={() => {
                console.log(image);
              }} >
              <img key={image} src={image} />
              </div>
            )}
              <div className="itemImgSmallWrapper" onClick={() => {
                  window.open("https://www.pinterest.com/pin/273523377340851247/?lp=true",'_blank');
                }} >
                <img src="https://i.pinimg.com/564x/3e/80/65/3e806531298243de1fe18669748799da.jpg" />
              </div>
              <div className="itemImgSmallWrapper" onClick={() => {
                  window.open("https://www.reebonz.com/sg/al-duca-daosta-1902/clothing/mens-al-duca-daosta-1902-short-coats-fw17-micro-houndstooth-blazer-11009240",'_blank');
                }} >
                <img src="https://mp-media.reebonz.com/images/p-26/reebonz-al-duca-daosta-1902-short-coats-fw17-micro-houndstooth-blazer-al-duca-daosta-1902-1-260a14f2-7c8f-4928-a0ae-0dd7dfc8c9c7.jpg;mode=pad;bgcolor=fff;404=404.jpg;width=402;height=500" />
              </div>
              <div className="itemImgSmallWrapper" onClick={() => {
                  window.open("https://www.pinterest.com/pin/442408363379893425/?lp=true",'_blank');
                }} >
                <img src="https://i.pinimg.com/564x/3f/30/81/3f3081fdad7a1ccbfef3a1c840af40a4.jpg" />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;
