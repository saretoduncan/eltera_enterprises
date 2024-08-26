import savana_lorry from "../../assets/savana_lorry.webp";
const FeaturesSection = () => {
  return (
    <>
      <div className="grid px-4 py-6 space-y-4">
        <section className="space-y-2">
          <h3 className="text-xl font-bold text-primaryBlue">
            <span className="text-base">Reliable </span><br/>Efficient and Dependable Transport Services
          </h3>
          <article className="text-gray-700 text-sm">
            At Eltera Enterprises, we are committed to delivering dependable and
            efficient transport services you can count on. Our fleet of heavy
            duty lorries is equipped to ensure your goods are transported
            securely and punctually. Whether your shipment needs to travel
            within Kenya or reach destinations across the country, you can rely
            on us to deliver every time.
          </article>
        </section>
        <section>
          <div
            className="h-[300px] w-full bg-cover bg-no-repeat relative"
            style={{ backgroundImage: "url(" + "'" + savana_lorry + "'" + ")" }}
          >
            <div className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-primaryBlue to-[#11111170]"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturesSection;
