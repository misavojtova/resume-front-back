import video from "../../videos/work.mp4";

function Background() {
  return (
    <div className='video'>
      <video
        autoPlay
        muted
        style={{
          position: "fixed",
          zIndex: "-1",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          display: "flex",
        }}
      >
        <source src={video} type='video/mp4'></source>
      </video>
    </div>
  );
}
export default Background;
