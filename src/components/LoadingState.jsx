function LoadingState() {
  return (
    <section className="app-shell">
      <div className="container py-4">
        <div className="card">
          <div className="card-body text-center">
            <p className="text-uppercase text-primary small mb-2">
              NASA Astronomy Picture of the Day
            </p>
            <h1 className="h3">Bezig met laden</h1>
            <div className="spinner-border text-primary mt-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoadingState;
