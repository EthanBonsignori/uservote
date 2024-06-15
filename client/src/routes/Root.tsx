import { Button, Typography } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import Typed from "typed.js";
import feedbackImg from "../assets/feedback.png";
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
      <div className="hero-section">
        <img src={feedbackImg} alt="UserVote" className="hero-image" />
        <div className="hero-text">
          <Typography variant="h2">Collect feedback.</Typography>
          <Typography variant="h2">
            Engage your <span className="" ref={typedRef} />
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </Typography>
          <Button variant="contained" color="primary">
            See more
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="plans-pricing"
            sx={{ ml: "15px" }}
          >
            Plans & Pricing
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Root;
