const Section = ({ titre, sousTitre, texte, id }) => (
  <section className="font-sans bg-gray-200 my-8 px-8 py-8 h-64" id={id}>
    <div className="container max-w-5xl m-auto">
      {sousTitre && <label className="uppercase tracking-wide text-gray-600 font-bold mt-8 ">{sousTitre}</label>}
      <h1 className="mt-2 mb-4 font-medium">{titre}</h1>

      <p className="leading-normal tracking-tight mb-4 text-justify">{texte}</p>
    </div>
  </section>
);

export default Section;
