import { useState, useEffect } from 'react';

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
    <div className='flex flex-row gap-4'>
      
        <div className='flex flex-col justify-center border w-20 h-20 rounded-full'>
            <span>{days}</span>
            <span>Days</span>
        </div>
        <div className='flex flex-col justify-center border w-20 h-20 rounded-full'>
            <span>{hours}</span>
            <span>Hours</span>
        </div>
        <div className='flex flex-col justify-center border w-20 h-20 rounded-full'>
            <span>{minutes}</span>
            <span>Minutes</span>
        </div>
        <div className='flex flex-col justify-center border w-20 h-20 rounded-full'>
            <span>{seconds}</span>
            <span>Seconds</span>
        </div>

        
    </div>
    
  );
};

export default Countdown;
