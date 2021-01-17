import React from 'react';

export default function Detail(props) {
  const { history } = props;
  const handleClick = () => {
    history.push({
      pathname: '/home',
      state: {
        from: '/detail',
      },
    });
  };

  return (
    <div onClick={handleClick}>
      Detail
    </div>
  );
}
