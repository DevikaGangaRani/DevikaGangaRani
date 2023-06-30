import React from 'react';
import Header from './components/Header';
import ChoosePlan from './components/ChoosePlan';
import CustomerReview from './components/CustomerReview';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <ChoosePlan />
      <CustomerReview />

      <div style={{ position: 'relative', top: '0px' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
