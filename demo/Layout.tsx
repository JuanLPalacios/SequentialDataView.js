import app from "apprun";
import { MarkdownComponent } from "./home";

const Layout = () => <>
    <nav id="menus">
      <a href="#home">Home</a>
    </nav>
    <div id="pages"></div>
  </>

export function start(){

    app.render(document.body, <Layout />);
    
    const names = [
        './content/home.md', 
    ];
    const routes = [
        ['#home'],
    ];
    const test =names.map((md,i)=>({md,routes:routes[i]}))
    const pages = test.map((t, index) =>{ 
        const cont = require(`${t.md}`).default;
        MarkdownComponent(cont,t.routes).mount('pages');
    });
    app.run(location.hash||'#home');
}