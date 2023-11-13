import { useState, useEffect } from 'react';
import CountDownDetail from './CountDownDetail';

type DateObject = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate: number = new Date('December 24, 2023 00:00:00').getTime();
  const [timeRemaining, setTimeRemaining] = useState<DateObject>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId: number = window.setInterval((): void => {
     
      const currentDate: number = new Date().getTime();
      const distance: number = targetDate - currentDate;

      const daysRemaining: number = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursRemaining: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesRemaining: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining: number = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({
        days: daysRemaining,
        hours: hoursRemaining,
        minutes: minutesRemaining,
        seconds: secondsRemaining,
      });

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const {days, hours, minutes, seconds } = timeRemaining;

  return (
    <div className='flex flex-row gap-1 xs:gap-4 mb-2 sm:mb-0'>      
       <CountDownDetail content={days} text='Days'/>
       <CountDownDetail content={hours} text='Hours'/>
       <CountDownDetail content={minutes} text='Minutes'/>
       <CountDownDetail content={seconds} text='Seconds'/>        
    </div>
    
  );
};

export default Countdown;
