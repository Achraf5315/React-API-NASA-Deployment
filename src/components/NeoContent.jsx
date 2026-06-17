import { formatNumber } from "../utils/formatNumber";

function NeoContent({ data }) {
  const approach = data.close_approach_data?.[0];
  const diameter = data.estimated_diameter?.kilometers;

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <p className="text-uppercase text-primary small mb-2">
          Near-Earth Object
        </p>
        <h2 className="h4 card-title mb-3">{data.name}</h2>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span
            className={`badge ${data.is_potentially_hazardous_asteroid ? "text-bg-danger" : "text-bg-success"}`}
          >
            {data.is_potentially_hazardous_asteroid
              ? "Potentieel gevaarlijk"
              : "Niet gevaarlijk"}
          </span>
          {approach?.close_approach_date && (
            <span className="badge text-bg-secondary">
              Nadering: {approach.close_approach_date}
            </span>
          )}
        </div>

        <div className="row g-3 mb-3">
          <div className="col-6">
            <div className="p-3 rounded-3 bg-light border h-100">
              <div className="text-uppercase text-muted small">Diameter</div>
              <div className="fw-semibold">
                {formatNumber(diameter?.estimated_diameter_min ?? 0)} -{" "}
                {formatNumber(diameter?.estimated_diameter_max ?? 0)} km
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 rounded-3 bg-light border h-100">
              <div className="text-uppercase text-muted small">Snelheid</div>
              <div className="fw-semibold">
                {formatNumber(
                  Number(approach?.relative_velocity?.kilometers_per_hour ?? 0),
                )}{" "}
                km/u
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="p-3 rounded-3 bg-light border h-100">
              <div className="text-uppercase text-muted small">
                Gemiste afstand
              </div>
              <div className="fw-semibold">
                {formatNumber(Number(approach?.miss_distance?.kilometers ?? 0))}{" "}
                km
              </div>
            </div>
          </div>
        </div>

        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item px-0 d-flex justify-content-between">
            <span>Orbit rond</span>
            <strong>{approach?.orbiting_body ?? "Onbekend"}</strong>
          </li>
          <li className="list-group-item px-0 d-flex justify-content-between">
            <span>JPL detailpagina</span>
            <a href={data.nasa_jpl_url} target="_blank" rel="noreferrer">
              Open link
            </a>
          </li>
        </ul>

        <p className="card-text text-secondary mb-0">
          Deze pagina combineert de dagelijkse APOD-foto met extra
          objectinformatie uit de NEO-API, zodat je direct beeld en context
          naast elkaar ziet.
        </p>
      </div>
    </div>
  );
}

export default NeoContent;
