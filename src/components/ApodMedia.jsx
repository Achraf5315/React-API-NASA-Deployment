import { useState } from "react";

function ApodMedia({ data }) {
  const [loaded, setLoaded] = useState(false);

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
  const srcSet = data.hdurl ? `${data.url} 1x, ${data.hdurl} 2x` : undefined;

  return (
    <img
      src={data.url}
      srcSet={srcSet}
      sizes="(max-width: 768px) 100vw, 50vw"
      alt={data.title}
      className="apod-media"
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      style={{
        filter: loaded ? "none" : "blur(20px)",
        transition: "filter 400ms ease-out, transform 400ms",
        transform: loaded ? "none" : "scale(1.02)",
      }}
    />
  );
}

export default ApodMedia;
