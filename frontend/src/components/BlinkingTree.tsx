import React, { useState, useEffect } from 'react';

const BlinkingTree: React.FC = () => {
  const [isLighted, setIsLighted] = useState<boolean>(true); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLighted(prev => !prev); 
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <img src={isLighted ? '/images/Christmas-Tree-A.svg' : '/images/Christmas-Tree-B.svg'} alt="Julgran" className='h-80'/>
  );
};

export default BlinkingTree;

