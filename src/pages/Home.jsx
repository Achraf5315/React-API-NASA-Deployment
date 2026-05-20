import { Link } from "react-router-dom";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import { useHomeData } from "../hooks/useHomeData";

function HomeCard({
  title,
  text,
  badge,
  image,
  alt,
  statLines,
  detailLink,
  detailLabel,
}) {
  return (
    <div className="card shadow-sm feature-card h-100">
      {image ? (
        <img
          src={image}
          alt={alt}
          className="card-img-top feature-card-image"
        />
      ) : null}
      <div className="card-body d-flex flex-column align-items-start gap-3">
        <p className="text-uppercase text-primary small mb-2">{badge}</p>
        <h2 className="h4 card-title text-body mb-2">{title}</h2>
        {text ? <p className="card-text text-secondary mb-0">{text}</p> : null}
        <div className="d-flex flex-wrap gap-2">
          {statLines.map((item) => (
            <span key={item} className="badge home-stat-pill text-nowrap">
              {item}
            </span>
          ))}
        </div>
        {detailLink ? (
          <Link to={detailLink} className="btn btn-primary mt-2">
            {detailLabel ?? "Bekijk details"}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function Home() {
  const { apod, neo, loading, error } = useHomeData();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} />;

  return (
    <section className="container py-4 py-lg-5">
      <div className="p-4 p-lg-5 mb-4 mb-lg-5 rounded-4 home-hero">
        <div className="row align-items-end g-4">
          <div className="col-lg-8">
            <p className="text-uppercase small mb-2 home-hero-kicker">
              NASA home overview
            </p>
            <h1 className="display-5 fw-semibold mb-3 text-white">
              Dagelijkse APOD-foto met extra ruimte-informatie
            </h1>
            <p className="lead mb-0 home-hero-copy">
              Bekijk de Astronomy Picture of the Day naast een Near-Earth
              Object-profiel met afstand, snelheid en diameter.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <div className="d-inline-flex flex-column gap-2 rounded-4 bg-white bg-opacity-10 p-3 border border-white border-opacity-25">
              <span className="small text-uppercase">Live NASA-data</span>
              <strong>APOD + NEO</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 align-items-stretch mb-4">
        <div className="col-lg-7">
          <HomeCard
            badge="APOD details"
            title={apod.title}
            image={apod.url}
            alt={apod.title}
            statLines={[
              apod.date,
              apod.copyright
                ? apod.copyright
                : "NASA Astronomy Picture of the Day",
            ]}
            detailLink="/apod"
            detailLabel="Open APOD detailspagina"
          />
        </div>
        <div className="col-lg-5">
          <HomeCard
            badge="NEO details"
            title={neo.name}
            text="Bekijk diameter, snelheid, minimale afstand en meer informatie over een near-earth object."
            image={null}
            alt=""
            statLines={[
              neo.is_potentially_hazardous_asteroid
                ? "Potentieel gevaarlijk"
                : "Niet gevaarlijk",
              neo.close_approach_data?.[0]?.close_approach_date ?? "Geen datum",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
