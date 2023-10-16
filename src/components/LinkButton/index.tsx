import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  to: string;
  text: string;
};

export const LinkButton = ({ to = '', text = '' }: Props) => {
  return (
    <Link className="btn" to={to}>
      {text}
    </Link>
  );
};
