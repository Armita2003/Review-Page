import Home from "@/src/Spinning-Circle/Home";

const HomePage = () => {
    return <Home />;
};

HomePage.getLayout = function getLayout(page) {
    return { page };
};

export default HomePage;
