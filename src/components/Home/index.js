import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';
import { browserHistory } from 'react-router';
import Slider from 'react-slick';

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.importAll = this.importAll.bind(this);
    this.onButton = this.onButton.bind(this);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }

  importAll(r) {
    return r.keys().map(r);
  }

  onButton(key) {
    var addr = '/item/' + key;
    browserHistory.push(addr);
  }

  render() {
    const array = this.importAll(require.context('./../../assets/images/male', false, /\.(png|jpe?g|svg)$/));

    var settings = {
        speed: 500,
        draggable: true,
        swipeToSlide: true,
        slidesToShow: 5,
        swipe: true,
        variableWidth: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <main className="home">
            <div className="overlayCont">
                <div className="overlay50">
                    <div>
                        <span> TOP 50 LIST </span>
                        <div className="Top50Category">
                            <button onClick={() => {
                                var addr = 'http://localhost:8080/' + 'top/male';
                                browserHistory.push(addr);
                            }}>  M E N </button>
                            <button onClick={() => {
                                var addr = 'http://localhost:8080/' + 'top/female';
                                browserHistory.push(addr);
                            }}>  W O M E N </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <Slider {...settings}>

                { array.map(image => 
                    <div style={{ display: "flex" }}>
                        <img className="imgSlider" key={image} src={image} alt="" />
                    </div>
                )
                }
            </Slider>
            
            </div>
            <div className="buttonContainer">
                <button className="category" onClick={() => {
                    var addr = 'http://localhost:8080/' + 'main/female';
                    browserHistory.push(addr);
                }}>WOMEN</button>
                <button className="category" onClick={() => {
                    var addr = 'http://localhost:8080/' + 'main/male';
                    browserHistory.push(addr);
                }}>MEN</button>
                <button className="category" onClick={() => {
                    var addr = 'http://localhost:8080/' + 'main/kids';
                    browserHistory.push(addr);
                }}>KIDS</button>
                <button className="category" onClick={() => {
                    var addr = 'http://localhost:8080/' + 'main/accs';
                    browserHistory.push(addr);
                }}>ACCESSORIES</button>
                <button className="category" onClick={() => {
                    var addr = 'http://localhost:8080/' + 'main/bags';
                    browserHistory.push(addr);
                }}>LUXURY BAGS</button>
            </div>
        </main>
    //   <main className="main">
    //     { array.map(image =>
    //       <div className="content" onClick={() => {
    //         var addr = '/item/' + image.replace('http://localhost:8080/', '').replace('.jpg', '');
    //         browserHistory.push(addr);
    //         console.log(image);
    //       }} >
    //         <div style={{height: "250px"}}>
    //           <img key={image} src={image} alt="" />
    //         </div>
    //         <span>
    //         { image.replace('http://localhost:8080/', '').replace('.jpg', '').split('_').join(' ')
    //                .replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) }
    //         </span>
    //       </div>
    //     )}
    //   </main>
    );
  }
}

export default Home;