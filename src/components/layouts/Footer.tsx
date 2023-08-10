import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 150,
        bgcolor: "inherit",
        px: "60px",
      }}
    >
      <Divider
        component="div"
        sx={{
          "::before, ::after": { top: "0%" },
        }}
      >
        <Typography color="grey.700" variant="h6" component="span">
          Developed by{" "}
          <Link
            target="_blank"
            underline="none"
            sx={{ color: "text.primary" }}
            href="https://github.com/crazy-man22"
          >
            Crazy Man
          </Link>
        </Typography>
      </Divider>
    </Box>
  );
}
