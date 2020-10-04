import HubspotForm from "./HubspotForm";

const Contact = () => {
  return (
    <section className="my-8 font-sans container max-w-4xl m-auto flex flex-col -mt-32">
      <div className="container max-w-4xl bg-white rounded-lg m-auto flex flex-wrap flex-row items-stretch justify-between">
        <div className="mx-auto md:w-1/2">
          <div className="px-8 pt-6 pb-8 mb-4 hubspot-form">
            <HubspotForm
              portalId="8576932"
              formId="7764736a-09d5-43b0-895a-9606b7558696"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>

        <div className="mx-auto md:w-1/2">
          <div className="px-8 pt-6 pb-8 mb-4 ">
            <h2 className="mb-6 font-bold text-xl">Camilab</h2>
            <p className="mb-2">3 rue de Franche Comté</p>
            <p className="mb-6">50100 Cherbourg-En-Cotentin</p>
            <p className="mb-6">06.99.92.11.59</p>
            <p>contact@camilab.co</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
