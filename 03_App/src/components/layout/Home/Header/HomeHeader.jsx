import { Button } from "@components/ui/Components.ui";
import "./HomeHeader.css";

export const HomeHeader = () => {
    const handleScroll = () => {
        const section = document.getElementById("home__about__section");
        section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="home__header__section">
            <div className="home__header__content">
                <div className="home__header__content__group">
                    <div className="home__header__content__container">
                        <h3 className="home__header__content__text">El futuro es ayer</h3>
                        <h1 className="home__header__content__title">ParadoxPoint Store</h1>
                    </div>
                    <div className="home__header__button__container">
                        <Button styles={["cta", "medium"]} handleClick={handleScroll}>Ingresar a la brecha</Button>
                    </div>
                </div>
            </div>
            <div className="home__header__image__container">
                <img className="home__header__image" src="./images/SuperNova Unit.png" draggable="false" />
            </div>
            <div className="home__mobile__header__button__container">
                <Button styles={["cta", "medium"]} handleClick={handleScroll}>Ingresar a la brecha</Button>
            </div>
        </section>
    );
}