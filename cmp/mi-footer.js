class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Quintana Hernandez Edith`;
  }
}
customElements.define("mi-footer", MiFooter);
