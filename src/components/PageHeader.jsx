function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="mb-8">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-700">
          {eyebrow}
        </p>
      )}

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h1>

      {description && (
        <p className="mt-4 max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </header>
  );
}

export default PageHeader;
