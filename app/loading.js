import Spinner from "@/app/_components/Spinner";

function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner />
      <h2>loading....</h2>
    </div>
  );
}

export default loading;
