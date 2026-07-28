import { Component } from "../components/Component.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";

export class HomePage extends Component {
    render() {
        const navbar = new Navbar({ activePage: "home", namasekolah: this.props.namasekolah }).render();
        const footer = new Footer({ namasekolah: this.props.namasekolah}).render();

        return `
        ${navbar}
        <main>
            <h1>Selamat Datang di Website Sekolah ${this.props.namasekolah}</h1>
            <p>Ini adalah halaman utama dari website sekolah kami semoga anda tertarik untuk masuk sekolah kami.</p>
        </main>
        ${footer}
       `;
    }
}