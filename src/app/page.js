import Nav_bar from "./components/nav_bar/nav_bar";
import Biblioteca from "./components/biblioteca/biblioteca";
import Main_page from "./components/main_page/main_page";
import Player from "./components/player/player";
import LibraryNotLogged from "./components/biblioteca/libraryNotLogged";

export default function Home() {
  return (
    <>

      <Nav_bar />

      <div className="grid grid-cols-[min-content_auto] grid-rows-[5fr_1fr] px-2">
        <LibraryNotLogged />
        
        { /*  <Biblioteca />  */}

        <Main_page />

        <Player />
      </div>

    </>
  );
}
