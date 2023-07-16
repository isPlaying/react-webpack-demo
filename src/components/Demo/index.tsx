import React, { useState } from 'react';
import styles from './index.module.less';
import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.png';

const Demo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((c: number) => c + 1);
  };

  return (
    <>
      <h1 className={styles.count}>Hello world</h1>
      <div>{count}</div>
      <input type="text" placeholder="请输入" />
      <button onClick={increment}>increment</button>
      <br />
      <img src={img1} />
      <img src={img2} />
    </>
  );
};

export default Demo;
