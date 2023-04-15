import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ErrorAnimation } from "../components/commons/ErrorAnimation";
import { PageLayout } from "../layout/PageLayout";

export const NotFoundPage = (): JSX.Element => {
  return (
    <PageLayout>
      <ErrorAnimation error="404">
        <Typography variant="h1" sx={{ textAlign: "center", my: "2rem" }}>
          Have you tried{" "}
          <Link to="/OBMNG" style={{ textDecoration: "none" }}>
            <strong>this</strong>
          </Link>
          ?
        </Typography>
      </ErrorAnimation>
    </PageLayout>
  );
};
