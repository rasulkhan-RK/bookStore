const ErrorPage = () => {
  return (
    <div>
      <div className="dark:bg-white dark:text-black bg-slate-900 text-black min-h-screen flex flex-grow items-center justify-center ">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="text-gray-600">
            Oops! The page you are looking for could not be found.
          </p>
          <a
            href="/"
            className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
