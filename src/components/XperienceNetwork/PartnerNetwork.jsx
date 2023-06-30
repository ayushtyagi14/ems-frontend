import React from "react";
import { useState } from "react";

const PartnerNetwork = () => {
  const partnerData = [
    {
      name: "Partner 1",
      title: "Partner Profile 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam tenetur sequi eius facilis delectus. Debitis odio veritatis cum aperiam labore quaerat at esse. Distinctio odio, magni vel voluptatum molestias animi quam vitae sint dignissimos esse! Ipsum ipsam perferendis blanditiis, maiores sint voluptatibus ad a doloremque delectus dolore corporis dolorem, sunt eaque eius, cum molestiae ab aperiam? Veritatis ad saepe consequatur iusto deserunt corrupti aut, dicta voluptate laborum laboriosam natus assumenda eligendi, sunt incidunt repudiandae sit maxime aliquam dignissimos? Cum consectetur numquam minus! Animi blanditiis sint, a, dolorum sequi laborum, voluptate error ullam tenetur repudiandae possimus aliquid nihil enim iste quas.",
    },
    {
      name: "Partner 2",
      title: "Partner Profile 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam tenetur sequi eius facilis delectus. Debitis odio veritatis cum aperiam labore quaerat at esse. Distinctio odio, magni vel voluptatum molestias animi quam vitae sint dignissimos esse! Ipsum ipsam perferendis blanditiis, maiores sint voluptatibus ad a doloremque delectus dolore corporis dolorem, sunt eaque eius, cum molestiae ab aperiam? Veritatis ad saepe consequatur iusto deserunt corrupti aut, dicta voluptate laborum laboriosam natus assumenda eligendi, sunt incidunt repudiandae sit maxime aliquam dignissimos? Cum consectetur numquam minus! Animi blanditiis sint, a, dolorum sequi laborum, voluptate error ullam tenetur repudiandae possimus aliquid nihil enim iste quas.",
    },
    {
      name: "Partner 3",
      title: "Partner Profile 3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam tenetur sequi eius facilis delectus. Debitis odio veritatis cum aperiam labore quaerat at esse. Distinctio odio, magni vel voluptatum molestias animi quam vitae sint dignissimos esse! Ipsum ipsam perferendis blanditiis, maiores sint voluptatibus ad a doloremque delectus dolore corporis dolorem, sunt eaque eius, cum molestiae ab aperiam? Veritatis ad saepe consequatur iusto deserunt corrupti aut, dicta voluptate laborum laboriosam natus assumenda eligendi, sunt incidunt repudiandae sit maxime aliquam dignissimos? Cum consectetur numquam minus! Animi blanditiis sint, a, dolorum sequi laborum, voluptate error ullam tenetur repudiandae possimus aliquid nihil enim iste quas.",
    },
    {
      name: "Partner 4",
      title: "Partner Profile 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam tenetur sequi eius facilis delectus. Debitis odio veritatis cum aperiam labore quaerat at esse. Distinctio odio, magni vel voluptatum molestias animi quam vitae sint dignissimos esse! Ipsum ipsam perferendis blanditiis, maiores sint voluptatibus ad a doloremque delectus dolore corporis dolorem, sunt eaque eius, cum molestiae ab aperiam? Veritatis ad saepe consequatur iusto deserunt corrupti aut, dicta voluptate laborum laboriosam natus assumenda eligendi, sunt incidunt repudiandae sit maxime aliquam dignissimos? Cum consectetur numquam minus! Animi blanditiis sint, a, dolorum sequi laborum, voluptate error ullam tenetur repudiandae possimus aliquid nihil enim iste quas.",
    },
  ];
  const [selectedPartner, setSelectedPartner] = useState(0);

  const handlePartnerClick = (partnerIndex) => {
    setSelectedPartner(partnerIndex);
  };

  return (
    <>
      <div className="flex flex-col my-10 w-[80%] mx-auto">
        <h1 className="text-center text-[30px] font-extrabold uppercase">
          Partner Network
        </h1>
        <div className="flex flex-col mt-10">
          <div className="flex justify-center mb-4">
            {partnerData.map((partner, index) => (
              <button
                key={index}
                className={`hover:bg-[#f10000] hover:text-white text-[#f10000] font-bold py-2 px-6 border-2 border-[#f10000] ${
                  selectedPartner === index
                    ? "bg-[#f10000] text-white"
                    : "border-[#f10000]"
                }`}
                onClick={() => handlePartnerClick(index)}
              >
                {partner.name}
              </button>
            ))}
          </div>
          {selectedPartner !== null && (
            <div className="mt-5">
              <h2 className="text-lg font-bold mb-2">
                {partnerData[selectedPartner].title}
              </h2>
              <p>{partnerData[selectedPartner].description}</p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <img
            src="/training1.jpg"
            alt="Training Image"
            className="rounded-xl"
          />
          <img
            src="/training2.jpg"
            alt="Training Image"
            className="rounded-xl"
          />
          <img
            src="/training1.jpg"
            alt="Training Image"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-row items-center mt-10">
          <button className="px-16 py-2 text-[#f10000] border border-[#f10000] rounded-full mr-5 hover:text-white hover:bg-[#f10000]">
            Website
          </button>
          <button className="px-16 py-2 text-[#f10000] border border-[#f10000] rounded-full hover:text-white hover:bg-[#f10000]">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default PartnerNetwork;
