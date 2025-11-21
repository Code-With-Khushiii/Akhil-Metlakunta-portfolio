const HeroBackground = () => {
  return (
    <section className="absolute inset-0">
      <div className="relative h-screen overflow-y-hidden">
        {/* Clean Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          className="w-full h-full object-cover pointer-events-none"
        >
          <source
            src="/assets/vecteezy_white-abstract-wave_1623417.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroBackground;
