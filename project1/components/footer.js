import { Component } from "./Component.js";

export class Footer extends Component {
    render() {
        const tahun = new Date().getFullYear();
        return `
            <hr/>
            <footer>
                <small>&copy; ${tahun} ${this.props.namasekolah} — Rodok - rodok adalah hak murid.</small>
            </footer>
        `;
    }
}
