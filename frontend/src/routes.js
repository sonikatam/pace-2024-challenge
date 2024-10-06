// src/routes.js
import Scene1 from './pages/HomeScreen';
import Scene2 from './pages/StartingMenu';
import Scene3 from './pages/Scene3';
import Scene4 from './pages/Scene4';
import Scene5 from './pages/Scene5';
import Scene6 from './pages/Scene6';
import OzoneQuestion from './pages/OzoneQuestion';
import IncreaseOzone from './pages/IncreaseOzone';
import DecreaseOzone from './pages/DecreaseOzone';
import NoChange from './pages/NoChange';
import PhytoplanktonQuestion from './pages/PhytoplanktonQuestion';
import IncreasePhytoplankton from './pages/IncreasePhytoplankton';
import DecreasePhytoplankton from './pages/DecreasePhytoplankton';

const routes = {
    scene1: Scene1,
    scene2: Scene2,
    scene3: Scene3,
    scene4: Scene4,
    scene5: Scene5,
    scene6: Scene6,
    OzoneQuestion: OzoneQuestion,
    IncreaseOzone: IncreaseOzone,
    DecreaseOzone: DecreaseOzone,
    NoChange: NoChange,
    PhytoplanktonQuestion: PhytoplanktonQuestion,
    IncreasePhytoplankton: IncreasePhytoplankton,
    DecreasePhytoplankton: DecreasePhytoplankton
};

export default routes;
