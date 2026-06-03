import { Link } from "react-router-dom";
import ApodContent from "../components/ApodContent";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import { useApod } from "../hooks/useApod";
import { useSearchParams } from "react-router-dom";

function ApodDetails() {
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get("date");
  const { data, loading, error } = useApod(selectedDate);

  if (loading) return <LoadingState variant="apod" />;
  if (error) return <ErrorState message={error.message} />;

  return (
    <section className="page-section page-section--stacked">
      <div className="page-intro page-intro--dark">
        <p className="eyebrow">MISSIE / APOD</p>
        <div className="page-intro__row">
          <h1 className="section-title">Astronomische foto van de dag</h1>
          <Link to="/" className="page-back-link">
            Terug naar home
          </Link>
        </div>
        <p className="page-lead">
          Een live venster op het dagelijkse NASA-archief, gepresenteerd als een
          redactionele missierapportage.
        </p>
        {selectedDate ? (
          <p className="page-lead page-lead--accent">
            Geselecteerde datum: {selectedDate}
          </p>
        ) : null}
      </div>

      <div className="page-panel">
        <ApodContent data={data} />
      </div>
    </section>
  );
}

export default ApodDetails;
