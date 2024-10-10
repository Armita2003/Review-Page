import Landing from "@/src/Landing";

const LandingPage = () => {
    return <Landing />;
};

LandingPage.getLayout = function getLayout(page) {
    return { page };
};

export default LandingPage;
