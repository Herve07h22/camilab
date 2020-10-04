import Item from "./Item";

const Methode = () => (
  <section className="font-sans md:my-8 md:p-8">
    <div className="container max-w-5xl m-auto flex flex-col rounded-lg bg-white md:-mt-32">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full flex-wrap">
          <Item
            icone="fas fa-user-astronaut"
            titre="Comprendre avant de vendre !"
            texte="Un logiciel métier bien construit démarre par une appropriation des activités de votre entreprise, et
              des attentes des utilisateurs."
          />

          <Item
            icone="far fa-comments"
            titre="La recommandation est le meilleur outil marketing."
            texte="Des prestations d'excellente qualité débouchent sur des partenariats durables et permettent de
              travailler avec de nouveaux clients."
          />
        </div>

        <div className="flex flex-row justify-between w-full flex-wrap">
          <Item
            icone="far fa-sticky-note"
            titre="Clarté du devis, fermeté des prix."
            texte="Nos devis sont détaillés et explicites sur les livrables. Tout est clair dès le début, vous savez ou
              vous allez."
          />

          <Item
            icone="fab fa-pagelines"
            titre="L'expérience professionnelle."
            texte="Nous travaillons avec un réseau de freelances dotés d'une sérieuse expérience. Cela facilite l'analyse
              de votre besoin et réduit les temps de développement."
          />
        </div>

        <div className="flex flex-row justify-between w-full flex-wrap">
          <Item
            icone="far fa-handshake"
            titre="La confiance avant tout."
            texte="Les missions font toujours l'objet d'un reporting régulier et d'une complète transparence sur les choix
              techniques. Les premières versions sont livrées très tôt pour construire ensemble le produit final qui
              correspond à vos attentes."
          />

          <Item
            icone="fas fa-code-branch"
            titre="Astuce et réutilisation."
            texte="Inutile de refacturer ce qui est déjà (bien) fait. Nous avons un goût prononcé pour l'utilisation
              astucieuse de ce qui fait déjà référence."
          />
        </div>
      </div>
    </div>
  </section>
);

export default Methode;
