function ErrorState({ message }) {
  return (
    <section className="error-shell">
      <div className="error-shell__content">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Ophalen mislukt</h4>
          <p className="mb-0">{message}</p>
        </div>
      </div>
    </section>
  );
}

export default ErrorState;
