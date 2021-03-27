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
              text=' We, at Topbest like you, are drivers ourselves. We love our cars and love driving them...'
              label='Car Grooming'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img2.jpg'
              text='Most of the time we polish only our vehicle to get the surface shine, but often skip the car interior polish..'
              label='Car Polishing'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img4.jpg'
              text='Try out our affordable mobile car grooming service with the various packages that we have to offer...'
              label='Water Washing'
              path='/products'
            />
          </ul>
          
          <ul className='cards__items'>
          <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img3.jpg'
              text='The gloss on our car paint can often fade due to the harsh weather conditions our cars are subjected to...'
              label='Car Coating'
              path='/services'
            />
          
            <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img5.jpg'
              text='Car interior is just like the house interior, we need to maintain it regularly to keep it clean and fresh, so that people who stay inside feel comfortable and healthy...'
              label='Car Interior Cleaning'
              path='/sign-up'
            />
            <CardItem
              src='https://raw.githubusercontent.com/dhilip1201/car-spa/main/img6.jpg'
              text='Our car tyres running on the road everyday, direct touching on the ground, nevertheless, it will be always full of dust and dirt...'
              label='Tyre Washing'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;