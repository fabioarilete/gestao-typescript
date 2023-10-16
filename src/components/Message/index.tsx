import { useState, useEffect } from 'react';
import './style.css';

type Props = {
  type: string;
  msg: string;
};

export const Message = ({ type = '', msg = '' }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return <>{visible && <div className={`message ${[type]}`}>{msg}</div>}</>;
};
