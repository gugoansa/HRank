export class FramePage {
    //////////////OTRA FORMA DE USAR CONSTRUCTOR
    /*
      private readonly page : Page;
  
      constructor(page:Page){
          this.page = page;
      }
      */
    constructor(page) {
        this.page = page;
        this.iFrameUrl = 'https://the-internet.herokuapp.com/iframe';
        // Aquí se les da el valor (lo mismo que el ejemplo corregido arriba)
        this.iFrameContext = page.frameLocator("#mce_0_ifr");
        //await page.locator('#mce_0_ifr').waitFor();
        this.editorBody = this.iFrameContext.locator("#tinymce");
    }
    /*
      //////////////OTRA FORMA DE IR AL IFRAME
      // 1. Usamos frameLocator para identificar el contexto del iframe
      private readonly iFrameContext: Locator;
      // 2. Este locator busca el elemento dentro del contexto del iFrame
      private readonly editorBody: Locator;
      constructor(private readonly page: Page) {
          // Asignación de las propiedades en el constructor
          // 1. Asignamos el Locator que representa el CONTEXTO del iframe (usamos su ID)
          this.iFrameContext = page.frameLocator('#mce_0_ifr');
          // 2. Encadenamos: Buscamos el elemento (#tinymce) DENTRO del iFrameContext
          this.editorBody = this.iFrameContext.locator('#tinymce');
  */
    //Para navegar a la URL 'https://the-internet.herokuapp.com/iframe'
    async mapsToIFramePage() {
        await this.page.goto(this.iFrameUrl);
        // Opcional: Esperar a que el iframe esté visible para asegurar la carga.
        await this.editorBody.waitFor({ state: 'visible' });
        //await editorBody.waitFor({ state: 'visible', timeout: 10000 }); // espera hasta 10 segundos
        // await this.page.locator("#mce_0_ifr").waitFor();
    }
    ;
    //Para escribir texto dentro del editor.
    /**
     * Escribe un texto dado dentro del área de edición del iframe.
     * @param text El texto a ingresar.
     */
    async enterTextIntoIFrame(texto) {
        // Espera a que el editor esté listo
        await this.editorBody.waitFor({ state: 'visible' });
        // Asegurarse que sea editable
        await this.editorBody.evaluate(el => el.setAttribute('contenteditable', 'true'));
        // Escribe el texto
        await this.editorBody.fill(texto); // o type(texto)
    }
    ;
    //Para obtener el texto y verificarlo.
    /**
     * Obtiene el contenido de texto del área de edición dentro del iframe.
     * @returns El contenido de texto como una promesa de string.
     */
    async getIFrameTextContent() {
        console.log(this.page.title());
        console.log(this.page.url());
        console.log(this.page.content());
        // Retorna el texto visible del elemento body del editor
        return this.editorBody.innerText();
    }
    ;
}
