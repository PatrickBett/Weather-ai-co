import { useAccountUsage } from "../hooks/useWeather";

export default function AccountPage() {
  const { data, isLoading, error } = useAccountUsage();

  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    padding: "30px 15px",
    color: "white",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
  };

  if (isLoading) {
    return (
      <div
        style={pageStyle}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="spinner-border text-light" role="status" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={pageStyle}>
        <div className="alert alert-danger text-center">{error.message}</div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={cardStyle} className="shadow-lg">
        <h3 className="text-center mb-4">Account Usage</h3>

        {/* PLAN */}
        <div className="mb-3">
          <h6>Plan</h6>
          <p className="fw-bold">{data.plan}</p>
        </div>

        {/* REQUESTS */}
        <div className="mb-3">
          <h6>Requests</h6>
          <p>
            {data.period.requestCount} / {data.limits.requests}
          </p>

          <div className="progress">
            <div
              className="progress-bar"
              style={{
                width: `${(data.period.requestCount / data.limits.requests) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* AI REQUESTS */}
        <div className="mb-3">
          <h6>AI Requests</h6>
          <p>
            {data.period.aiRequestCount} / {data.limits.aiRequests}
          </p>

          <div className="progress">
            <div
              className="progress-bar bg-info"
              style={{
                width: `${(data.period.aiRequestCount / data.limits.aiRequests) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* REMAINING */}
        <div className="mt-4">
          <h6>Remaining Requests</h6>
          <p className="fw-bold">{data.remaining.requests}</p>
        </div>

        {/* PERIOD */}
        <div className="mt-3">
          <small className="text-light">
            Billing: {new Date(data.period.start).toLocaleDateString()} →{" "}
            {new Date(data.period.end).toLocaleDateString()}
          </small>
        </div>
      </div>
    </div>
  );
}
