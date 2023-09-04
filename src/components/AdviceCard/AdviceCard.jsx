import React, { useEffect, useState } from 'react';

// import AdviceSlipData from '../../types/AdviceSlip';
// import AdviceSlipService from '../../services/AdviceService';
import AdviceAPI from '../../api/api';

import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CircularProgress from '@mui/joy/CircularProgress';

const AdviceCard = () => {
  const initialAdviceCardState = {
    slip: {
      id: null,
      advice: ''
    }
  };

  const [adviceSlip, setAdviceSlip] = useState(initialAdviceCardState);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = width <= 375;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  useEffect(() => {
    AdviceAPI.getAdvice().then(response => {
      const slip = response.data;
      setAdviceSlip(slip);
      setLoading(false);
    })
  }, [loading]);

  const fetchAdvice = () => {
    AdviceAPI.getAdvice().then(response => {
      const slip = response.data;
      setAdviceSlip(slip);
      setLoading(false);
    })
  }

  return (
    loading ? <CircularProgress /> : (
      <div className='advice-card'>
      {/* <Card> */}
        <div className='id'>Advice #{adviceSlip.slip.id}</div>
        <div className='advice'><q>{adviceSlip.slip.advice}</q></div>
        <div className='divider'>
          <img src={mobile ? '../../pattern-divider-mobile.svg' : '../../pattern-divider-desktop.svg'} />
        </div>
        <div className='dot-container'>
          {/* <span className='dot'>
            <img className='dice-img' src={'../../icon-dice.svg'} />
          </span> */}
          <Button
            onClick={() => fetchAdvice()}
            style={{
              borderRadius: '50%',
              height: '60px',
              width: '60px',
              backgroundColor: 'hsl(150, 100%, 66%)',
              display: 'inline-block'
            }}
          >
            <img className='dice-img' src={'../../icon-dice.svg'} />
          </Button>
        </div>
      {/* </Card> */}
      </div>
     )
  );
};

export default AdviceCard;