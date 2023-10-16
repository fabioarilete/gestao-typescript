import loading from '../../img/loading.svg';

import './style.css';

export default function Loading() {
  return (
    <div className="loaderContainer">
      <img className="loader" src={loading} alt="Loading" />
    </div>
  );
}
