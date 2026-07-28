import { Component } from "../components/Component.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";

export class AboutPage extends Component {
    render() {
        const navbar = new Navbar({ activePage: "about", namasekolah: this.props.namasekolah }).render();
        const footer = new Footer({ namasekolah: this.props.namasekolah}).render();

        return `
            ${navbar}
            <main>
                <h1>About ${this.props.namasekolah}</h1>
                <p>${this.props.namasekolah} Didirikan pada tahun 1995 di kota ngawi </p>
            </main>
            ${footer}
          `;
    }
}
