export const NotFound404Page = () => {
  return (
    <main className="grid min-h-full place-items-center bg-slate-800 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-400 sm:text-5xl">
          Not Found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
};
