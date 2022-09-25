import Instal from "../../components/Sections/install";
export default function Contact() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in touch!
          </h2>
          <div className="contactus__content">
            <p className="mt-4 text-gray-500">
              If you have any questions, suggestions, or feedback about
              e-Tafakna, please feel free to contact us.
              <br />
              By email:
              <a
                className="underline"
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              >
                info@e-tafakna.com
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"></div>
      </div>
      <Instal />
    </div>
  );
}
