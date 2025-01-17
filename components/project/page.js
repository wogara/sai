import Image from 'next/image';

const Project = ({ title, imageUrl, description }) => {
  return (
    <div className="flex items-center justify-between my-10">
      <div className="flex flex-col items-center m-5">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <Image
          width={400}
          height={400}
          src={imageUrl}
          alt={title}
          className="w-100 h-auto mb-4"
        />
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Previous</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Play</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Pause</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;

