import { Link } from "react-router-dom";

function PageIntro({
  eyebrow,
  title,
  lead,
  accent,
  backLinkTo = "/",
  backLinkLabel = "Terug naar home",
}) {
  return (
    <div className="page-intro page-intro--dark">
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-intro__row">
        <h1 className="section-title">{title}</h1>
        <Link to={backLinkTo} className="page-back-link">
          {backLinkLabel}
        </Link>
      </div>
      <p className="page-lead">{lead}</p>
      {accent ? <p className="page-lead page-lead--accent">{accent}</p> : null}
    </div>
  );
}

export default PageIntro;
