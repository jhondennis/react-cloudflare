import CircularProgress from "@mui/material/CircularProgress";

export const LoadingLazyPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
};
