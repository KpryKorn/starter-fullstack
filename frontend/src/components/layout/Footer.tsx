export default function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer className="bg-slate-200">
      <div className="container py-6">
        <p>Copyrights {CURRENT_YEAR}</p>
      </div>
    </footer>
  );
}
