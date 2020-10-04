const Hero = () => (
  <section className="container mx-auto bg-white font-sans md:h-screen flex flex-col items-center justify-around">
    <a href="/" className="self-start">
      <img src="./assets/fusee_texte_camilab.png" className="h-15 sm:h-10" alt="logo" />
    </a>

    <div className=" flex flex-row items-center flex-wrap mt-4">
      <div className="w-full py-12 w-full md:w-1/2">
        <h1 className="my-4 font-bold text-5xl text-center text-gray-500">
          Nous fabriquons les
          <span className="text-black"> logiciels</span> de votre entreprise.
        </h1>
      </div>
      <div className=" max-w-md lg:p-8 text-right w-full md:w-1/2 ">
        <img src="./assets/undraw_finance_0bdk.svg" alt="image" className="w-full w-auto" />
      </div>
    </div>

    <div>
      <div className="leading-normal justify-center mb-4 mt-2 md:mt-0 px-2 text-justify">
        <ul className="list-reset mx-2">
          <li className="text-xl mb-4">
            <i className="far fa-arrow-alt-circle-right mr-2"></i>Ils automatisent vos activités et vous font gagner du
            temps.
          </li>
          <li className="text-xl mb-4">
            <i className="far fa-arrow-alt-circle-right mr-2"></i>Ils vous démarquent de vos concurrents grâce à des
            services plus innovants.
          </li>
          <li className="text-xl mb-4">
            <i className="far fa-arrow-alt-circle-right mr-2"></i>Ils centralisent vos données de façon sécurisée.
          </li>
        </ul>
      </div>
    </div>

    <div className="flex flex-row items-center max-w-xl flex-wrap justify-center mt-8">
      <a
        href="#contact"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded m-2 text-xl no-underline text-center"
      >
        Nous contacter
      </a>
    </div>
  </section>
);

export default Hero;
