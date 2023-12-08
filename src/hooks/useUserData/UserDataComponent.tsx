import Box from "../../components/Box";
import useUserData from "./useUserData";

const UserDataComponent = () => {
  const { os, browser, timezone } = useUserData();
  return (
    <Box title="useUserData Hook">
      <h2>
        Operation System: <span className="text-orange-700 dark:text-orange-600 font-bold">{os}</span>
      </h2>
      <h2>
        Browser: <span className="text-orange-700 dark:text-orange-600 font-bold">{browser}</span>
      </h2>
      <h2>
        Timezone: <span className="text-orange-700 dark:text-orange-600 font-bold">{timezone.location}</span>, UTC:{" "}
        <span className="text-orange-700 dark:text-orange-600 font-bold">{timezone.utc}</span>
      </h2>
    </Box>
  );
};

export default UserDataComponent;
