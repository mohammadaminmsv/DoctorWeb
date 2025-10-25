import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const GAlert = ({ type = "success", text = "" }: GAlert) => {
  return (
    <Stack sx={{ width: "30%" }} spacing={2}>
      <Alert variant="outlined" severity={`${type}`}>
        {text}
      </Alert>
    </Stack>
  );
};

export default GAlert;
