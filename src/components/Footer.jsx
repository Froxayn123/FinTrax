import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <>
      <div>
        <svg className="h-[800px] md:h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" fill="none">
          <path d="M1439.1 600.004H-0.779652C-0.779652 544.097 -0.77975 202.021 -0.903809 143.438C197.666 167.748 356.185 186.044 590.929 143.438C1009.29 67.5069 1439.1 0.00390625 1439.1 0.00390625V600.004Z" fill="#0D243D" />
        </svg>
      </div>

      <div className="relative mx-[50px] -top-[500px] md:-top-[300px]">
        <FooterContent />
      </div>
    </>
  );
};

export default Footer;
