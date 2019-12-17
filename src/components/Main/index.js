import React, { Component } from 'react';
import './styles.sass';
import { Link } from 'react-router';
import Item from '../Item/index';
import { browserHistory } from 'react-router';
import csv_male from './../../assets/images/male_res.tsv';
import csv_female from './../../assets/images/female_res.tsv';

var full;
var rank;
var category;
var csv;
var ranking;

class Homepage extends Component {
  constructor(props, context) {
    super(props, context);
    full = window.location.href.replace('http://localhost:8080/', '');
    rank     = full.slice(0, full.indexOf("/"));
    category = full.split("/").pop();
    ranking  = (rank === 'top' ? 'Top 50' : 'General');

    console.log(csv_female);

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
    var stuff;

    switch (rank) {
      case 'top' :
        switch(category) {
          case 'female': csv = csv_female;  break;
          case 'male'  : csv = csv_male;    break;
        }
        break;

      case 'main' :
        switch (category) {
          case 'female': stuff = require.context('./../../assets/images/female', false, /\.(png|jpe?g|svg)$/); break;
          case 'male'  : stuff = require.context('./../../assets/images/male', false, /\.(png|jpe?g|svg)$/);   break;
          case 'kids'  : stuff = require.context('./../../assets/images/kids', false, /\.(png|jpe?g|svg)$/);   break;
          case 'accs'  : stuff = require.context('./../../assets/images/accs', false, /\.(png|jpe?g|svg)$/);   break;
          case 'bags'  : stuff = require.context('./../../assets/images/bags', false, /\.(png|jpe?g|svg)$/);   break;
        }
        break;
    }

    var array = [];
    var score = [];
    if (rank == 'top') {
      for (var i = 0; i < 50; i++) {
        array[i] = 'http://localhost:8080/' + csv[i].Product.split(' ').join('_');
        score[i] = csv[i].Score;
      }
    } else array = this.importAll(stuff);

    console.log(array);

    return (
      <main className="main">
        <span className="subtitle">{category} - {ranking}</span>
        <div style={{width: '100%'}}>
        <Link className="backLink" to="/">
          <span className="small">
            <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10l5 5 5-5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </span>All Items
        </Link>
        </div>
        { array.map(image =>
            <div className="content" onClick={() => {
              var addr = '/item/' + image.replace('http://localhost:8080/', '').replace('.jpg', '');
              browserHistory.push(addr);
              console.log(image);
            }} >
            <div style={{height: "250px"}}>
              <img class={({rank} == 'top' ? 'top50image' : '')} key={image} src={image} alt="" />
            </div>
            <span>
            { image.replace('http://localhost:8080/', '').replace('.jpg', '').split('_').join(' ')
                   .replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) }
            </span>
          </div>
        )}
      </main>
    );
  }
}

export default Homepage;
