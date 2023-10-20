import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './style.css';

export default function Loading() {
  return (
    <div className="loaderContainer">
      <AiOutlineLoading3Quarters size={'100px'} />
    </div>
  );
}
