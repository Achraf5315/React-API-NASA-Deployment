function Contact() {
  return (
    <section className="container py-4 py-lg-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body p-4 p-lg-5">
              <p className="text-uppercase text-primary small mb-2">Contact</p>
              <h1 className="h3 mb-3">Neem contact op</h1>
              <p className="text-secondary mb-4">
                Laat een bericht achter als je feedback hebt over de NASA-pagina
                of als je extra onderdelen wilt toevoegen.
              </p>
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="name">
                    Naam
                  </label>
                  <input
                    id="name"
                    className="form-control"
                    type="text"
                    placeholder="Jouw naam"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    id="email"
                    className="form-control"
                    type="email"
                    placeholder="naam@voorbeeld.nl"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="subject">
                    Onderwerp
                  </label>
                  <input
                    id="subject"
                    className="form-control"
                    type="text"
                    placeholder="Waar gaat je vraag over?"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="message">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Typ je bericht..."
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary">
                    Verstuur
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
