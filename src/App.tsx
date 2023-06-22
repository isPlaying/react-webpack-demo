import React, { useState } from 'react';
import './index.less';
const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((c: number) => c + 1);
  };

  return (
    <>
      <h1 className="count">Hello world</h1>
      <div>{count}</div>
      <input type="text" placeholder="请输入" />
      <button onClick={increment}>increment</button>
    </>
  );
};

export default App;