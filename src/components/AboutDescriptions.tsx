type AboutDescriptionsProps = {
  image: string;
  title: string;
};

const AboutDescriptions = ({ image, title }: AboutDescriptionsProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 px-4 py-8 w-full max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 px-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#333333]">{title}</h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam molestiae
          enim aliquid iure alias asperiores repudiandae repellat repellendus, itaque magnam,
          maxime odio a. Placeat et cumque impedit quas quo.
        </p>
      </div>
    </div>
  );
};

export default AboutDescriptions;
