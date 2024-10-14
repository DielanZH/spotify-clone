import Nav_bar from "./components/nav_bar/nav_bar";
import Biblioteca from "./components/biblioteca/biblioteca";
import Main_page from "./components/main_page/main_page";

export default function Home() {
  return (
    <>
    <Nav_bar></Nav_bar>
    <div className="grid grid-cols-2">
      <Biblioteca></Biblioteca>

      <Main_page></Main_page>
    </div>
    </>
  );
}
