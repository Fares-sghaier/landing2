import styles from "../../../style";
import home from "../../../assets/images/Home/home.png";
import MobileStoreButton from "react-mobile-store-button";

const Hero = () => {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  return (
    <section id="home" className={`flex md:flex-row flex-col mt-20`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[65px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          Of Contract Signing.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts provides you with any type of contracts that you
          want , you can sign with your digital signature , also share the
          contract .
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <MobileStoreButton
              store="ios"
              url={iOSUrl}
              linkProps={{ title: "iOS Store Button" }}
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <MobileStoreButton
              store="android"
              url={iOSUrl}
              linkProps={{ title: "iOS Store Button" }}
            />
          </div>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={home}
          alt="billing"
          className="w-[40%] h-[90%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
