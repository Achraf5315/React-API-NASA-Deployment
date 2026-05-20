import { Link } from "react-router-dom";
import ApodContent from "../components/ApodContent";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import { useApod } from "../hooks/useApod";

function ApodDetails() {
  const { data, loading, error } = useApod();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} />;

  return (
    <section className="container py-4 py-lg-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h3 mb-0">APOD details</h1>
        <Link to="/" className="btn btn-outline-secondary btn-lg">
          Terug naar home
        </Link>
      </div>
      <ApodContent data={data} />
    </section>
  );
}

export default ApodDetails;
