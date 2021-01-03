import React from 'react';

export default function Home() {
  const handleClick = () => {
    console.log('1');
  };
  return (
    <div onClick={() => handleClick()}>
      Home
    </div>
  );
}
