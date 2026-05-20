function ApodMedia({ data }) {
  if (data.media_type === "video") {
    return (
      <div className="ratio ratio-16x9">
        <iframe
          src={data.url}
          title={data.title}
          loading="lazy"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <img src={data.url} alt={data.title} className="card-img-top img-fluid w-50 align-self-center" />
  );
}

export default ApodMedia;
