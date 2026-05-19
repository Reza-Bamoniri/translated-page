import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const {
    translations,
    setLanguage,
    language,
  } = useLanguage();

  return (
    <div
      dir={language === "fa" ? "rtl" : "ltr"}
      className="min-h-screen bg-red-100"
    >
      {/* navbar */}

      <nav className="bg-white shadow-md px-8 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-700">
          React App
        </h1>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-red-600 duration-200">
            {translations.navbarHome}
          </li>

          <li className="cursor-pointer hover:text-red-600 duration-200">
            {translations.navbarAbout}
          </li>

          <li className="cursor-pointer hover:text-red-600 duration-200">
            {translations.navbarContact}
          </li>
        </ul>

        <div className="flex gap-3">
          <button
            onClick={() => setLanguage("fa")}
            className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 rounded-lg duration-200"
          >
            {translations.changeFa}
          </button>

          <button
            onClick={() => setLanguage("en")}
            className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg duration-200"
          >
            {translations.changeEn}
          </button>
        </div>
      </nav>

      {/* hero section */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-5xl font-bold text-gray-950 leading-tight">
            {translations.heroTitle}
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-9">
            {translations.heroDescription}
          </p>

          <button className="mt-8 bg-red-700 hover:bg-red-900 text-white px-6 py-3 rounded-xl text-lg duration-200">
            Start Learning
          </button>
        </div>
      </section>

      {/* cards */}

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {translations.sectionTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* card 1 */}

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              {translations.card1Title}
            </h3>

            <p className="text-gray-600 leading-8">
              {translations.card1Desc}
            </p>
          </div>

          {/* card 2 */}

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              {translations.card2Title}
            </h3>

            <p className="text-gray-600 leading-8">
              {translations.card2Desc}
            </p>
          </div>

          {/* card 3 */}

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              {translations.card3Title}
            </h3>

            <p className="text-gray-600 leading-8">
              {translations.card3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* footer */}

      <footer className="bg-red-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            {translations.footerTitle}
          </h2>

          <p className="text-gray-200 mt-4 text-lg">
            {translations.footerDesc}
          </p>
        </div>
      </footer>
    </div>
  );
};


export default Home;