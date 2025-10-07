const Comingsoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="Logo" className="entrance-logo" />
        <div className="text-wrapper">
          <h3 className="gradient-title">
            Coming <br />May 26th <br /> 2025
          </h3>
        </div>
        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" alt="PlayStation Logo" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" alt="Xbox Logo" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  );
};

export default Comingsoon;
