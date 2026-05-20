import ApodMedia from "./ApodMedia";

function ApodContent({ data }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <p className="text-uppercase text-primary small mb-2">
          NASA Astronomy Picture of the Day
        </p>
        <h1 className="card-title">{data.title}</h1>
        <p className="text-muted mb-0">
          {data.date}
          {data.copyright ? ` • ${data.copyright}` : ""}
        </p>
      </div>

      <ApodMedia data={data} />

      <div className="card-body">
        <p className="card-text">{data.explanation}</p>
      </div>
    </div>
  );
}

export default ApodContent;
