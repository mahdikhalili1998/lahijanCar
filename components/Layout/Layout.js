import Link from "next/link";
function Layout({ children }) {
  return (
    <div className="bg-slate-100">
      <header>
        <Link
          className="mx-auto mb-16 mt-9 flex w-max flex-col items-center justify-center gap-2 divide-y-2 divide-slate-300  "
          href="/"
        >
          <h1 className="bg-gradient-to-r from-red-400 via-blue-300 to-red-600 bg-clip-text text-5xl font-black text-transparent ">
            LAHIJAN CAR
          </h1>
          <p className="text-red-500">Choose & Buy your car</p>
        </Link>
      </header>
      <div>{children}</div>
      <footer className="mt-9 rounded-lg bg-slate-400">
        <p className="text-center">
          This site developed by :
          <Link
            className="ml-1 font-medium text-white "
            href="https://www.instagram.com/mahdi_lhj/"
            target="_blank"
          >
            Mahdi khalili
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Layout;
