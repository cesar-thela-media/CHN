import AboutUs from "@/components/shadcn-space/blocks/about-us-03/about-us";

const aboutusData = [
    {
      count: "98%",
      title: "Client satisfaction rate"
    },
    {
      count: "87+",
      title: "Successful projects launched"
    },
    {
      count: "50k+",
      title: "Monthly visitors"
    }
];


const AboutAndStats03 = () => {
  return (
    <>
      <AboutUs aboutusData={aboutusData} />
    </>
  );
};

export default AboutAndStats03;
