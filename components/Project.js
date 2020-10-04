import { useState } from "react";

const Project = ({ qui, quoi, titre, image, imageClic, alt, competences }) => {
  const [animated, setAnimated] = useState(false);
  const diplayedImage = imageClic && animated ? imageClic : image;
  return (
    <div className="transition duration-500 ease-in-out md:w-1/2m w-full bg-white rounded-lg border-gray-500 shadow mx-2 my-8 px-4 py-2 hover:transform-scale-subtle flex flex-col justify-between">
      <img
        className="w-full h-auto"
        style={{ minHeight: "1px" }}
        src={`assets/${diplayedImage}`}
        alt={alt}
        onClick={() => setAnimated((a) => !a)}
      />

      <h3 className="font-medium  my-4 leading-normal text-xl">{titre}</h3>
      <p className="inline-flex items-center mb-4 flex-wrap">
        {competences.map((c) => (
          <span
            key={c}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >
            {c}
          </span>
        ))}
      </p>

      <div className="font-medium text-gray-600 text-sm text-justify py-2">
        <p className="mb-1">{qui}</p>
        <p>{quoi}</p>
      </div>
    </div>
  );
};

export default Project;
