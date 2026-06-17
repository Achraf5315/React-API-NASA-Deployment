import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LoadingState from "../components/LoadingState.jsx";
import ErrorState from "../components/ErrorState.jsx";
import { getApodRange, getNeoObject } from "../../services/NASA-API.js";
import PageIntro from "../components/PageIntro.jsx";

function NeoCard({ neo }) {
  if (!neo) return null;

  const approach = neo.close_approach_data?.[0] || {};

  return (
    <article className="science-card">
      <p className="eyebrow eyebrow--dark">NEO OBJECT</p>
      <h2>{neo.name}</h2>
      <div className="science-card__meta">ID: {neo.id}</div>
      <ul className="science-list">
        <li>
          <strong>Diameter (est): </strong>
          {neo.estimated_diameter?.meters?.estimated_diameter_max?.toFixed(1)} m
        </li>
        <li>
          <strong>Velocity: </strong>
          {approach.relative_velocity?.kilometers_per_hour} km/h
        </li>
        <li>
          <strong>Miss distance: </strong>
          {approach.miss_distance?.kilometers} km
        </li>
        <li>
          <strong>Potentially hazardous: </strong>
          {neo.is_potentially_hazardous_asteroid ? "Ja" : "Nee"}
        </li>
      </ul>
    </article>
  );
}

function Gallery({ apods }) {
  if (!apods || !apods.length) return null;

  return (
    <div className="science-gallery">
      {apods.map((item) => (
        <Link
          key={item.date}
          to={`/apod?date=${item.date}`}
          className="gallery-card gallery-card--link"
        >
          {item.media_type === "image" ? (
            <img
              src={item.url}
              alt={item.title}
              className="gallery-card__media"
              loading="lazy"
            />
          ) : (
            <div className="gallery-card__media ratio ratio-16x9">
              <iframe src={item.url} title={item.title} loading="lazy" />
            </div>
          )}
          <div className="gallery-card__body">
            <h3>{item.title}</h3>
            <div className="gallery-card__meta">{item.date}</div>
            <p>
              {item.explanation?.slice(0, 140)}
              {item.explanation?.length > 140 ? "…" : ""}
            </p>
            <span className="gallery-card__cta">Bekijk detail</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Overview() {
  const [apods, setApods] = useState(null);
  const [neo, setNeo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  useEffect(() => {
    let isActive = true;

    async function load() {
      setLoading(true);
      try {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 8);

        const toISO = (date) => date.toISOString().slice(0, 10);

        const [apodRange, neoObject] = await Promise.all([
          getApodRange(toISO(start), toISO(end)),
          getNeoObject(),
        ]);

        if (isActive) {
          setApods(
            Array.isArray(apodRange) ? [...apodRange].reverse() : [apodRange],
          );
          setNeo(neoObject);
        }
      } catch (exception) {
        if (isActive) setError(exception);
      } finally {
        if (isActive) setLoading(false);
      }
    }

    load();

    return () => {
      isActive = false;
    };
  }, []);

  const filteredApods = useMemo(() => {
    if (!apods) return [];

    const query = deferredSearch.trim().toLowerCase();
    if (!query) return apods;

    return apods.filter((item) => {
      const haystack =
        `${item.title} ${item.date} ${item.explanation ?? ""}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [apods, deferredSearch]);

  if (loading) return <LoadingState variant="gallery" />;
  if (error) return <ErrorState message={error.message} />;

  return (
    <section className="page-section page-section--stacked">
      <PageIntro
        eyebrow="WETENSCHAP / OVERZICHT"
        title="Recente APOD en een near-Earth object"
        lead="Een donker dataruim voor het recente archief en baantracking, in dezelfde redactionele stijl als de homepage."
      />

      <div className="page-grid">
        <NeoCard neo={neo} />
        <div className="page-panel page-panel--wide">
          <div className="overview-toolbar">
            <div className="section-heading-inline">
              <p className="eyebrow eyebrow--dark">RECENTE APOD</p>
              <h2>Vers uit het archief</h2>
            </div>
            <label className="search-field">
              <span>Zoek in archief</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Zoek op titel, datum of beschrijving"
              />
            </label>
          </div>
          <p className="overview-results-copy">
            {filteredApods.length} van {apods.length} items zichtbaar
          </p>
          <Gallery apods={filteredApods} />
        </div>
      </div>
    </section>
  );
}

export default Overview;
