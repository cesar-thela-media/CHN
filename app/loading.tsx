/** Instant route shell so soft navigations feel immediate. */
export default function Loading() {
  return (
    <div
      className="min-h-[40vh] w-full bg-background"
      aria-busy="true"
      aria-label="Loading"
    />
  );
}
