import "./Body.css";

function Body() {
  return (
    <section className="body">
      <div className="laser laser-1"></div>
      <div className="laser laser-2"></div>
      <div className="laser laser-3"></div>

      <div className="body__overlay"></div>

      <div className="body__content">
        <h1 className="body__title">
          FUTURE<span>CORE</span>
        </h1>

        <p className="body__subtitle">
          Enter the neon dimension of tomorrow.
        </p>

        <div className="body__buttons">
          <button className="btn btn-primary">Launch</button>
          <button className="btn btn-secondary">Explore</button>
        </div>
      </div>

      <div className="grid"></div>
    </section>
  );
}

export default Body;