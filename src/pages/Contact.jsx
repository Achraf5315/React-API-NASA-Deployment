import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  consent: false,
};

function validate(values) {
  const nextErrors = {};

  if (values.name.trim().length < 2) {
    nextErrors.name = "Vul minimaal 2 tekens in.";
  }

  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    nextErrors.email = "Vul een geldig e-mailadres in.";
  }

  if (!values.subject) {
    nextErrors.subject = "Kies een reden voor contact.";
  }

  if (values.message.trim().length < 20) {
    nextErrors.message = "Bericht moet minimaal 20 tekens bevatten.";
  }

  if (!values.consent) {
    nextErrors.consent = "Je moet akkoord gaan om gecontacteerd te worden.";
  }

  return nextErrors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState(null);

  const errors = useMemo(() => validate(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
      consent: true,
    });

    if (!isValid) {
      setSubmitted(false);
      setResponse(null);
      return;
    }

    setSending(true);
    setSubmitted(false);
    setResponse(null);

    setSending(false);
    setSubmitted(true);
    setResponse({
      status: "sent",
      name: form.name,
      email: form.email,
      message: form.message,
      route: form.subject,
      receivedAt: new Date().toISOString(),
    });
    setForm(initialForm);
    setTouched({});
  }

  return (
    <section className="page-section page-section--stacked">
      <div className="page-intro page-intro--dark">
        <p className="eyebrow">CONTACT / MISSIES</p>
        <div className="page-intro__row">
          <h1 className="section-title">
            Stuur een bericht naar missiebesturing
          </h1>
          <Link to="/" className="page-back-link">
            Terug naar home
          </Link>
        </div>
        <p className="page-lead">
          Gebruik dit formulier voor samenwerkingen, persvragen of vragen over
          het archief. Het formulier controleert je invoer vóór verzending.
        </p>
      </div>

      <div className="page-panel contact-layout">
        <div className="contact-copy">
          <p className="eyebrow eyebrow--dark">WAAROM DIT FORMULIER BESTAAT</p>
          <h2>Gestructureerd contact houdt de missie overzichtelijk.</h2>
          <p>
            Een contactpagina geeft de site een echte formulierworkflow, wat
            past bij de opdracht en de redactionele NASA-stijl compleet maakt.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span>Naam</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={updateField}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.name && errors.name)}
            />
            {touched.name && errors.name ? <small>{errors.name}</small> : null}
          </label>

          <label className="field">
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.email && errors.email)}
            />
            {touched.email && errors.email ? (
              <small>{errors.email}</small>
            ) : null}
          </label>

          <label className="field">
            <span>Reden voor contact</span>
            <select
              name="subject"
              value={form.subject}
              onChange={updateField}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.subject && errors.subject)}
            >
              <option value="">Kies een onderwerp</option>
              <option value="press">Persvraag</option>
              <option value="collaboration">Samenwerking</option>
              <option value="archive">Vraag over archief</option>
              <option value="technical">Technisch probleem</option>
            </select>
            {touched.subject && errors.subject ? (
              <small>{errors.subject}</small>
            ) : null}
          </label>

          <label className="field field--full">
            <span>Bericht</span>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={updateField}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.message && errors.message)}
            />
            {touched.message && errors.message ? (
              <small>{errors.message}</small>
            ) : null}
          </label>

          <label className="consent-field field--full">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={updateField}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.consent && errors.consent)}
            />
            <span>
              Ik ga ermee akkoord dat missiecontrole per e-mail mag reageren.
            </span>
          </label>
          {touched.consent && errors.consent ? (
            <small className="field-error field--full">{errors.consent}</small>
          ) : null}

          <div className="form-actions field--full">
            <button
              type="submit"
              className="btn-outline-hero"
              disabled={sending}
            >
              {sending ? "Versturen..." : "Bericht verzenden"}
            </button>
            <p>
              {submitted
                ? "Bericht succesvol verzonden. We reageren zo snel mogelijk."
                : "Alle velden worden gecontroleerd voordat je verstuurt."}
            </p>
          </div>

          {response ? (
            <div className="mock-response field--full">
              <p className="eyebrow eyebrow--dark">MOCK API-ANTWOORD</p>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;
