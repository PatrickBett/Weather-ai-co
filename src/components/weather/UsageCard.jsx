export default function UsageCard({ data }) {
  if (!data) return null;

  return (
    <div className="card p-3 shadow-sm">
      <h5>API Usage</h5>

      <p>Plan: {data.plan}</p>

      <p>
        Requests: {data.period.requestCount} / {data.limits.requests}
      </p>

      <p>
        AI Requests: {data.period.aiRequestCount} / {data.limits.aiRequests}
      </p>

      <p>Remaining: {data.remaining.requests}</p>
    </div>
  );
}
