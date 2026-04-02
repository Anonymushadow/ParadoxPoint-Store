import "./Home.css";
import { HomeHeader } from "@components/layout/Home/Header/HomeHeader";
import { HomeAbout } from "@components/layout/Home/HomeAbout/HomeAbout";
import { HomeProductsSection } from "@components/layout/Home/HomeProductsSection/HomeProductsSection";
import { HomeCategoriesSection } from "@components/layout/Home/HomeCategoriesSection/HomeCategoriesSection";
import { HomeGlitchSection } from "@components/layout/Home/HomeGlitchSection/HomeGlitchSection";

export const Home = () => {

    return (
        <main className="home">
            <HomeHeader />
            <HomeAbout />
            <HomeCategoriesSection />
            <HomeGlitchSection />
            <HomeProductsSection />
        </main>
    );
}