export default function Navbar() {
  return (
    <>
      <div className="inset-x-0 top-0">
        <nav className=" rounded-b bg-blue-950 px-20 py-14 text-blue-50">
          <div className="flex justify-evenly">
            <div className="px-8">
              <div className="rounded bg-sky-400">
                <button>CONTEXT MENU</button>
              </div>
            </div>
            <div className="px-8">
              <div className="relative rounded bg-sky-400">
                <button>SEARCH</button>
              </div>
            </div>
            <div className="px-24">
              <div className="rounded">
                <p className="text-2xl">Bardzo Dobry Sklep Muzyczny</p>
              </div>
            </div>
            <div className="px-8">
              <div className="rounded bg-sky-400">
                <button>PROFILE</button>
              </div>
            </div>
            <div className="px-8">
              <div className="rounded bg-sky-400">
                <button>CART</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
