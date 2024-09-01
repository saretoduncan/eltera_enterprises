import maisha_magic_logo from "../assets/maisha_magic_logo.webp";
import adpack_logo from "../assets/adpack_logo.webp";
import ashut_logo from "../assets/ashut_logo.webp";
import export_trading_logo from "../assets/etg_logo.webp";
import green_vale_logo from "../assets/green_vale_logo.webp";

export type TTestimonialType = {
  content: string;
  imgUrl: string;
  repName: string;
  companyTitle: string;
};

export const TestimonialData: TTestimonialType[] = [
  {
    companyTitle: "Representative at Maisha Packaging Ltd",
    repName: "Tabitha Wanjiru",
    content: `As a leading woven polypropylene bag manufacturer, Eltera Enterprises has been our reliable transportation partner. Their professional and punctual team ensures smooth shipments, while their well-maintained vehicles guarantee cargo safety. We highly recommend them for reliable transportation solutions.`,
    imgUrl: maisha_magic_logo,
  },
  {
    companyTitle: "Representative at Adpack Limited",
    content: `As a leading woven sacks manufacturer in Kenya, Eltera Enterprises has been our indispensable transportation partner. Their reliable and efficient services have streamlined our supply chain, ensuring punctual deliveries and meeting customer demands. We've been consistently impressed with their professionalism and dedication to exceptional service.`,
    imgUrl: adpack_logo,
    repName: "Jackson Ndirangu",
  },
  {
    companyTitle: "Representative at Ashut Engineers Ltd",
    repName: "Joshua Karanja",
    content: `As a leading manufacturer of steel, wood, and aluminum products, we needed to transport a delicate, high-value shipment. Eltera Enterprises excelled with their expertise and meticulous care, ensuring safe, timely delivery. We were highly satisfied with their service and will rely on them for future shipments`,
    imgUrl: ashut_logo,
  },
  {
    companyTitle: "Representative at Export Trading Input Kenya Ltd",
    content:
      "Eltera Enterprises, a key agro-input supplier, has been an invaluable transportation partner. Their reliable services have expanded our reach, boosting sales. Their expertise in handling diverse shipments ensures timely, cost-effective delivery. The dedication and excellence of their team have solidified our partnership, making them essential to our success.",
    repName: "Swapnil Kadam",
    imgUrl: export_trading_logo,
  },
  {
    companyTitle: "Representative at Greenvale School Eldoret",
    content: `Our school faced a tight deadline for educational materials, but Eltera Enterprises delivered. Their team's expertise and efficiency ensured timely delivery. We were impressed with their proactive communication and problem-solving skills. Their dedication to customer satisfaction is commendable, and we recommend them to other schools.`,
    imgUrl: green_vale_logo,
    repName: "Norah Chemengen",
  },
];
