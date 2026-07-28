import { Component } from "../components/Component.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";

export class KontakPage extends Component {
    render() {
         const navbar = new Navbar({ activePage: "kontak", namasekolah: this.props.namasekolah }).render();
        const footer = new Footer({ namasekolah: this.props.namasekolah}).render();

         return `
         ${navbar}
            <main>
              <h1>Hubungi sekolah kami</h1>
              <p>Email: infosmkn_rodok'.sch.id</p>
              <p>Telepon: (+62) 2342 7382</p>
             </main>
         ${footer}
      `;
    }
}
