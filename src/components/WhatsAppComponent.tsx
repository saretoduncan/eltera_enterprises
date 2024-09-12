import whatsapp_icon from "../assets/whatsapp_icon.svg";
const WhatsAppComponent = () => {
  return (
    <>
      <a
        href="https://wa.me/254721594969?text=Hello,%20I%20am%20interested%20in%20your%20services."
        className="fixed z-50 bottom-2 right-2 bg-green-500 p-2 text-white rounded-md flex font-bold space-x-1 "
      >
        <img src={whatsapp_icon} alt="" className="w-6" />
      </a>
    </>
  );
};

export default WhatsAppComponent;
