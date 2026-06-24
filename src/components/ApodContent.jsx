import ApodMedia from "./ApodMedia";

function ApodContent({ data }) {
  return (
    <article className="apod-feature-card">
      <div className="apod-feature-card__header">
        <p className="eyebrow eyebrow--dark">
          NASA ASTRONOMISCHE FOTO VAN DE DAG
        </p>
        <h1>{data.title}</h1>
        <p className="apod-feature-card__meta">
          {data.date}
          {data.copyright ? ` • ${data.copyright}` : ""}
        </p>
      </div>

      <ApodMedia data={data} />

      <div className="apod-feature-card__body">
        <p>{data.explanation}</p>
      </div>
    </article>
  );
}

export default ApodContent;
