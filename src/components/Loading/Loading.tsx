import './Loading.style.css';

function Loading() {
  return (
    <div className="overlay">
      <div className="overlay__inner">
        <div className="overlay__content">
          <span className="spinner"></span>
        </div>
      </div>
    </div>
  );
}

export { Loading as default };
