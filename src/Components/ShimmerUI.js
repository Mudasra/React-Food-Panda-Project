const ShimmerUI = () => {
  const shimmerCount = 10;

  return (
    <>
      {Array.from({ length: shimmerCount }).map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-wrapper">
            <div className="shimmer-img"></div>
            <div className="shimmer-line short"></div>
            <div className="shimmer-line"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShimmerUI;
