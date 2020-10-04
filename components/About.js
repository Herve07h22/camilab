import RemoveCookieButton from "./RemoveCookieButton";

const About = () => (
  <footer className="font-sans bg-white py-8 px-4">
    <div className="mx-auto container overflow-hidden flex flex-col md:flex-row justify-between pb-4 text-center md:text-left">
      <a href="/" className="block mr-4 w-full md:w-1/4">
        <img src="./assets/fusee_camilab.png" className="w-32 -ml-8 md:ml-0" alt="logo" />
      </a>
      <div className="w-full text-gray-700 mt-6 md:mt-0 leading-normal text-justify">
        <h4 className="py-2 uppercase font-bold tracking-wide ">Qui sommes nous ?</h4>
        <p>
          <b>Bonjour 👋 , je suis Hervé Rincent.</b>{" "}
        </p>
        <p>
          Camilab est l'agence que j'ai lancée en 2018 pour accompagner le développement numérique des entreprises et
          les débuts des start-up avec des <b>missions sur-mesure</b>.
        </p>
        <p>
          J'aime écouter mes clients parler de leur métier et analyser avec eux les opportunités offertes par le
          numérique pour innover.
        </p>
        <p>
          Mon goût pour le code (dès l'age de 13 ans) s'est marié avec une expérience d'une vingtaine d'années chez un
          grand nom du secteur français de l'énergie. Il a donné naissance à un projet entrepreunerial, dont l'ambition
          est de participer à la modernisation de l'économie. Une économie plus sobre, plus efficace, et qui fait une
          plus large place aux freelances qui inventent une façon différente de travailler.
        </p>
        <p>J'aime la Normandie, les vagues du Cotentin, et aussi coder avec le moins de lignes possibles.</p>
        <h4 className="mt-2 py-2 uppercase font-bold tracking-wide ">
          Recevez chaque semaine un article sur des sujets tech/data
        </h4>
        <p>
          <i>gratuit, sans spam, désinscription en 1 clic</i>
        </p>
        <iframe
          src="https://camilab.substack.com/embed"
          width="100%"
          height="150"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div className="text-gray-600 flex flex-col items-center w-full md:w-1/4 mt-6 md:mt-0">
        <h4 className="inline-block py-2 px-3 uppercase font-bold tracking-wide text-gray-600">Follow Us</h4>
        <div className="flex pl-0 md:pl-4 justify-start">
          <a
            className="block flex items-center text-gray-600 hover:text-black mr-6 no-underline"
            href="https://github.com/Herve07h22"
          >
            <i className="fab fa-github-alt"></i>
          </a>
          <a
            className="block flex items-center text-gray-600 hover:text-black mr-6 no-underline"
            href="mailto:contact@camilab.co"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            className="block flex items-center text-gray-600 hover:text-black mr-6 no-underline"
            href="https://twitter.com/07h22news"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="block flex items-center text-gray-600 hover:text-black no-underline"
            href="https://www.linkedin.com/in/herve-rincent-camilab/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="pt-4 mt-4 text-gray-600 text-xs border-t border-gray-400 text-center">
      ©2020 Camilab - 3 rue Franche Comté 50100 Cherbourg. All rights reserved.
      <RemoveCookieButton />
    </div>
  </footer>
);

export default About;
