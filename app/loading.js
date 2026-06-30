import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner />
      <h2>Loading....</h2>
    </div>
  );
}

export default Loading;
