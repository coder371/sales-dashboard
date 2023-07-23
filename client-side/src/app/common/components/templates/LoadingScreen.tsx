import ClipLoader from "react-spinners/ClipLoader";
export function LoadingScreen() {
  return (
    <div className="sweet-loading">
      <ClipLoader color="#36d7b7" size={40}  />
    </div>
  );
}