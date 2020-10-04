import Project from "./Project";

const Projects = () => (
  <section className="my-8 font-sans container max-w-5xl m-auto flex flex-col ">
    <div className="flex flex-wrap flex-row items-stretch justify-between md:-mt-32" style={{ minHeight: "1px" }}>
      <Project
        titre="Pilotage des activités de maintenance"
        image="Suivi_activites_maintenance_blur_opt.png"
        alt="Industrial maintenance management screenshot"
        competences={["NodeJS", "React", "Postgresql", "Docker"]}
        qui="IMAC est un groupement d'entreprises réalisant la maintenance préventive et corrective sur des équipements industriels à forte technicité.  
            Ce sont près de 20,000 activités à coordonner chaque année avec un haut niveau d'exigence qualité."
        quoi="Nous avons réalisé un outil en ligne assurant le suivi collaboratif de tout le cycle de vie d'une activité de maintenance depuis sa préparation, sa planification jusqu'à son archivage."
      />
      <Project
        titre="Un dashboard pour analyser les covoiturages"
        image="Dashboard_Mobicoop_opt.png"
        alt="Mobicoop Scope screenshot"
        competences={["Elasticsearch", "Kibana", "Logstash", "React"]}
        qui={
          <span>
            <a href="https://www.mobicoop.fr">Mobicoop</a> est une plateforme opensource dédiée au co-voiturage. Chaque
            jour elle connecte des milliers d'utilisateurs désireux d'optimiser leurs déplacements sans payer de
            commission pour la mise en relation.
          </span>
        }
        quoi="Nous avons développé l'outil décisionnel qui importe les données anonymisées dans un entrepôt ElasticSearch afin de fournir
          des outils d'analyse pour améliorer le service et développer de nouvelles politiques locales de mobilité."
      />
    </div>
    <div className="flex flex-wrap flex-row items-stretch justify-between" style={{ minHeight: "1px" }}>
      <Project
        titre="Un outil SaaS de commercialisation de leads"
        image="LeadsB2B.png"
        alt="Lead management screenshot"
        competences={["NodeJS", "React", "Postgresql", "Docker", "Stripe"]}
        qui="David exploite plusieurs sites internet à fort trafic sur la Suisse et la Belgique. Il propose aux particuliers 
        un service de mise en relation avec des entreprises locales pour des prestations d'entretiens, de travaux ou de déménagement."
        quoi="Nous avons codé un outil SaaS à destination des entreprises pour contacter des clients et leur proposer un devis en ligne. 
        les entreprises sont informées en temps-réel des nouvelles opportunités par mail et notification push."
      />
      <Project
        titre="Un portail interne de GED et de formation"
        image="portail.png"
        alt="Document and training webapp screenshot"
        competences={["Python", "Django", "React", "Postgresql"]}
        qui="Christelle dirige le service administratif et ressources humaines d'un grand groupe de distribution automobile.
        Ses équipes élaborent les procédures, formulaires et reporting pour tous les employés du groupe."
        quoi="Elle nous a confié la réalisation d'une application web qui facilite l'accès aux fichiers nécessaires selon le profil de chaque employé.
        L'outil permet également le pilotage des plans de professionnalisation par les managers d'équipes."
      />
    </div>

    <div className="flex flex-wrap flex-row items-stretch justify-between" style={{ minHeight: "1px" }}>
      <Project
        titre="Un synoptique interactif en VueJS"
        image="synaeptique.png"
        imageClic="synaeptique.gif"
        alt="Requirement management screenshot"
        competences={["VueJS", "Javascript", "Netlify"]}
        qui="Luc et Julien ont lancé une start-up proposant une démarche innovante pour élaborer un cahier des charges. 
        L'objectif est d'offrir une expérience utilisateur qui tranche radicalement avec la rédaction traditionnelle d'un pavé documentaire."
        quoi="Nous avons codé le synoptique interactif qui présente le graphe des exigences. 
        Livré sous forme de composant modulaire, l'enjeu était de l'intégrer dans l'outil SaaS en cours de développement en le connectant au backend."
      />
      <Project
        titre="Explorer ses données avec ElasticSearch"
        image="kibana.png"
        alt="Kibana screenshot"
        competences={["Elasticsearch", "Python", "Logstash"]}
        qui="Carine est responsable du département Marketing d'un grand groupe, qui communique et interagit avec ses clients au travers
        de plusieurs sites thématiques. Des millions de données étaient produites chaque jour sur les serveurs hébergeant les sites, 
        mais elles n'étaient pas utilisables."
        quoi="Nous avons conçu et mis en production un outil d'analyse de l'audience des sites en exploitant les fichiers de logs détaillés.
        Des tableaux de bords synthétisent les données et mesurent l'impact des campagnes lancées sur les réseaux sociaux."
      />
    </div>
  </section>
);

export default Projects;
