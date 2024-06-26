// librarys

import { useMediaQuery } from "@react-hook/media-query";

import ViewSmall from "./responsive/ViewSmall";
import ViewNormal from "./responsive/ViewNormal";





// inicial.
function Home() {



    const isSmallView = useMediaQuery('(max-width: 730px)');


    return (


        <>
            {
                isSmallView ? <ViewSmall /> : <ViewNormal />
            }
        </>
    );

}




export default Home;