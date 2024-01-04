export default function Footer() {
  return (
    <>
      <div className="">
        <footer className="absolute inset-x-0 bottom-0 rounded-t bg-blue-950 px-20 py-12 text-blue-50">
          <div className="flex w-screen">
            <div className="w-1/3">
              <p className="pb-2 text-2xl underline decoration-sky-100">Bardzo dobry sklep muzyczny</p>
            </div>
            <div className="w-1/3">
              <p className="pb-2 text-2xl underline decoration-sky-100">Contact Info:</p>
              <div>
                <ul className="text-lg">
                  <li className="mt-1">
                    <a className="pr-2 text-gray-200">Michał:</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Github</a>
                  </li>
                  <li className="mt-1">
                    <a className="pr-2 text-gray-200">Natalia</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Github</a>
                  </li>
                  <li className="mt-1">
                    <a className="pr-2 text-gray-200">Mateusz</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Github</a>
                  </li>
                  <li className="mt-1">
                    <a className="pr-2 text-gray-200">Kuba</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Github</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/3">
              <p className="pb-2 text-2xl underline decoration-sky-100">Wersja beta 1.0</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
