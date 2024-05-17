// librarys

import { useMediaQuery } from "@react-hook/media-query";

// // componentes
// import Logo from "../components/Logo";
// import ItemNav from "../components/ItenNav";
// import TopItems from "../components/TopItems";
// import { navegation } from "../service/itemsNavegacon";

import ViewSmall from "./responsive/ViewSmall";
import ViewNormal from "./responsive/ViewNormal";




// inicial.
function Home() {



    const isSmallView = useMediaQuery('(max-width: 690px)');


    return (



        <>
            {
                isSmallView ? (
                    <ViewSmall />
                ) : <ViewNormal />
            }
        </>
    );

}




export default Home;