function HomeSkeleton() {
  return (
    <>
      <div className="skeleton-hero mb-4 rounded-4" />
      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card shadow-sm">
            <div className="skeleton-card">
              <div className="skeleton-img" />
              <div className="skeleton-lines">
                <div className="skeleton-line short" />
                <div className="skeleton-line" />
                <div className="skeleton-line" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm">
            <div className="skeleton-card p-3">
              <div className="skeleton-line short" style={{ width: "60%" }} />
              <div className="skeleton-line" />
              <div className="skeleton-line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ApodSkeleton() {
  return (
    <>
      <div className="skeleton-hero mb-4 rounded-4" />
      <div className="card shadow-sm mb-3">
        <div className="skeleton-card">
          <div
            className="skeleton-img"
            style={{ width: "60%", minHeight: 260 }}
          />
          <div className="skeleton-lines">
            <div className="skeleton-line short" style={{ width: "50%" }} />
            <div className="skeleton-line" />
            <div className="skeleton-line" />
            <div className="skeleton-line" />
            <div className="skeleton-line" />
          </div>
        </div>
      </div>
    </>
  );
}

function GallerySkeleton() {
  const items = new Array(9).fill(0);
  return (
    <div className="row g-3">
      {items.map((_, i) => (
        <div key={i} className="col-12 col-sm-6 col-md-4">
          <div className="card h-100 shadow-sm">
            <div
              className="skeleton-img"
              style={{ height: 140, width: "100%" }}
            />
            <div className="card-body">
              <div
                className="skeleton-line short"
                style={{ width: "60%", height: 14 }}
              />
              <div
                className="skeleton-line"
                style={{ height: 12, marginTop: 8 }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LoadingState({ variant = "home", children }) {
  if (children) {
    return <section className="loading-shell">{children}</section>;
  }

  let content;
  switch (variant) {
    case "apod":
      content = <ApodSkeleton />;
      break;
    case "gallery":
    case "recent":
      content = <GallerySkeleton />;
      break;
    case "home":
    default:
      content = <HomeSkeleton />;
      break;
  }

  return <section className="loading-shell">{content}</section>;
}

export default LoadingState;
