type TWhyUsProps = {
  icon: string;
  title: string;
  caption: string;
  class_name?: string;
};

const WhyUsCards: React.FC<TWhyUsProps> = ({
  icon,
  title,
  caption,
  class_name,
}) => {
  return (
    <>
      <div className={`grid gap-4 ${class_name}`}>
        <img src={icon} alt="time icon" className="w-16 justify-self-center" />
        <div className="text-center space-y-2">
          <h5 className="font-bold">{title}</h5>
          <p className="text-sm">{caption}</p>
        </div>
      </div>
    </>
  );
};

export default WhyUsCards;
