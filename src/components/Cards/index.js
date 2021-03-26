import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>WE ARE PROVIDE YOU RELIABLE CAR SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img1.jpg'
              text=' We, at Topbest like you, are drivers ourselves. We love our cars and love driving them. But when our vehicles get dirty from all our driving in town'
              label='Car Grooming'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img2.jpg'
              text='Car Polishing'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img4.jpg'
              text='Water Washing'
              label='Adventure'
              path='/products'
            />
          </ul>
          
          <ul className='cards__items'>
          <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img3.jpg'
              text='Car Coating'
              label='Mystery'
              path='/services'
            />
          
            <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img5.jpg'
              text='Car Interior Cleaning'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img6.jpg'
              text='Tyre Washing'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;