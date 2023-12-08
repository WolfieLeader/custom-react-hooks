import Box from "../../components/Box";
import useUserData from "./useUserData";

const UserDataComponent = () => {
  const { os, browser, timezone } = useUserData();
  return (
    <Box title="usUseData Hook">
      <h2>Operation System: {os}</h2>
      <h2>Browser: {browser}</h2>
      <h2>
        Timezone: {timezone.location}, UTC: {timezone.utc}
      </h2>
    </Box>
  );
};

export default UserDataComponent;
