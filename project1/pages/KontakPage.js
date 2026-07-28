import { Component } from "../components/Component.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";

export class KontakPage extends Component {
    render() {
         const navbar = new Navbar({ activePage: "kontak" }).render();
         const footer = new Footer().render();

         return `
         ${navbar}
            <main>
              <h1>Hubungi Kami</h1>
              <p>Email: info@smkyadikasoreang.sch.id</p>
              <p>Telepon: (+62) 2342 7382</p>
             </main>
         ${footer}
      `;
    }
}
