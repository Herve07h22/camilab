const Item = ({ icone = "fa-user-astronaut", titre, texte }) => (
  <div className="w-full md:w-1/2 flex flex-col items-start px-6 py-3 md:py-8 md:px-8 lg:items-start">
    <h2 className="text-black mb-2 w-full text-2xl font-bold">
      <i className={`${icone} mr-1`}></i>
      {titre}
    </h2>

    <p className="leading-snug mb-2 text-gray-600 w-full">{texte}</p>
  </div>
);

export default Item;
