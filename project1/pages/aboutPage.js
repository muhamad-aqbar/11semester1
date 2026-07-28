import { Component } from "../components/Component.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";

export class AboutPage extends Component {
    render() {
        const navbar = new Navbar({ activePage: "about" }).render();
        const footer = new Footer().render();

        return `
            ${navbar}
            <main>
                <h1>About Yadika Soreang</h1>
                <p>SMK Yadika Soreang didirikan pada tahun 2013 dan mulai beroperasi pada tahun pelajaran 2013/2014 di bawah naungan Yayasan Abdi Karya (Yadika).</p>
            </main>
            ${footer}
          `;
    }
}
