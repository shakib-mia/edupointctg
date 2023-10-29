import { useContext } from "react";
import { AppContext } from "../../App";

const Profile = () => {
  const { store } = useContext(AppContext);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/4 bg-white text-black p-5 text-center">
        {store.firstName ? (
          <>
            <p>
              {store.firstName} {store.lastName}
            </p>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default Profile;
