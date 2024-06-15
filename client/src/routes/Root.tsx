import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC, useEffect, useRef } from "react";
import Typed from "typed.js";
import Layout from "../components/Layout";

const Root: FC = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "users.",
        "audience.",
        "viewers.",
        "customers.",
        "fans.",
        "subscribers.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  // const {
  //   isLoading,
  //   error,
  //   data: featureRequests,
  // } = useQuery({
  //   queryKey: ["feature-requests"],
  //   queryFn: getFeatureRequests,
  // });

  // FIXME: landing page not as early return
  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid item xs={12} className="">
          <Typography variant="h2">Collect feedback.</Typography>
          <Typography variant="h2">
            Engage your <span className="" ref={typedRef} />
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            See more
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Root;
