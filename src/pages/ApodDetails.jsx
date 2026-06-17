import ApodContent from "../components/ApodContent";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import PageIntro from "../components/PageIntro";
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
      <PageIntro
        eyebrow="MISSIE / APOD"
        title="Astronomische foto van de dag"
        lead="Een live venster op het dagelijkse NASA-archief, gepresenteerd als een redactionele missierapportage."
        accent={selectedDate ? `Geselecteerde datum: ${selectedDate}` : null}
      />

      <div className="page-panel">
        <ApodContent data={data} />
      </div>
    </section>
  );
}

export default ApodDetails;
