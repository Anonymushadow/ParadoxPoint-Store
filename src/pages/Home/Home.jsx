import "./Home.css";
import { HomeHeader } from "@components/features/Home/Header/HomeHeader";
import { HomeAbout } from "@components/features/Home/HomeAbout/HomeAbout";
import { HomeProductsSection } from "@components/features/Home/HomeProductsSection/HomeProductsSection";
import { HomeCategoriesSection } from "@components/features/Home/HomeCategoriesSection/HomeCategoriesSection";
import { HomeGlitchSection } from "@components/features/Home/HomeGlitchSection/HomeGlitchSection";

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