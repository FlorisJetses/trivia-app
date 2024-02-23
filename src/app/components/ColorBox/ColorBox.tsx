export const ColorBox = ({ color }: { color: any }) => {
  return (
    <div
      style={{ backgroundColor: color, height: "100vh" }}
      className="color-box"
    />
  );
};
