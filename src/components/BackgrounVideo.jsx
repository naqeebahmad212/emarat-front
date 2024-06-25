import Demo from "/videos/demo.mp4";

const BackgroundVideoSection = () => {
  return (
    <div className="video-section absolute -z-[99] top-0 left-0 w-full h-full">
      <video
        className="video-background h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={Demo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is a section with a background video.</p>
      </div>
    </div>
  );
};

export default BackgroundVideoSection;
