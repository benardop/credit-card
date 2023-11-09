import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import imageLogo   from './image/react-icon.png'

function CreditCard({cardInfo}) {
  return (
    <div className='credit-card'>
       <Name text={cardInfo.holderName} />
       <CardNumber  text={cardInfo.cardNumber}/>
       <Bank text={cardInfo.bank}/>
       <Civ text={cardInfo.civ}/>
       <Validity text={cardInfo.validy}/>
    </div>
  )
}

function Poster({details}) {
  return (
    <div className='poster'>
      <Image />
      <Title text={details.title}/>
      <Text text ={details.text}/>
    </div>
  )
}

const Name = ({text}) => {
  return (
    <div className='holder-name'>
        {text}
    </div>
  )
}

const CardNumber = ({text}) => {
  return (
    <div className='card-number'>
        {text}
    </div>
  )
}

const Bank = ({text}) => {
  return (
    <div className='bank-name'>
      {text}
    </div>
  )
}

const Civ = ({text}) => {
  return (
    <div className='card-civ'>
      {text}
    </div>
  )
}

const Validity = ({text}) => {
  return (
    <div className='card-validity'>
      {text}
    </div>
  )
}

const Image = () => {
  return (
    <div className='image-style'>
     <img 
       src={imageLogo}
       alt='Poster Logo'
       className='poster-image'/>
    </div>
  )
}

const Title = ({text}) => {
  return (
    <div className='title'>
      {text}
    </div>
  )
}

const Text = ({text}) => {
  return (
    <div className='poster-text'>
      {text}
    </div>
  )
}

const testCardInfo = {
  holderName: 'CardHolder Name',
  cardNumber: '123 345 678 879',
  civ: '234',
  validy: 'Valid thru 08/26',
  bank: 'Big Bank Inc.'
}

const posterDetails = {
  title: "React",
  text: "The best thing since jQuery, Probbaly"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreditCard cardInfo={testCardInfo} />
    <Poster details={posterDetails}/>
  </React.StrictMode>
);
