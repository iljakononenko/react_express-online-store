import NavBar from "../components/NavBar";
import CarouselBlock from "../components/page_blocks/Carousel_block";
import ProductsBlock from "../components/page_blocks/Products_block";
import AuthBlock from "../components/page_blocks/Auth_block";

export const getBasicBlock = (component_id, key, props) => {
    switch (component_id){
        case 0:
            return <NavBar key={key} props={props} />
        case 1:
            return <CarouselBlock key={key} props={props} />
        case 2:
            return <ProductsBlock key={key} props={props} />
        case 3:
            return <AuthBlock key={key} props={props} />

    }
}
