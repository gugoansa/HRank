import { Page, Locator } from '@playwright/test'; 

export class AdvancedFormsPage{

    private readonly formsUrl: string = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html';
    
    constructor(private readonly page: Page) {
        
    }

    
    // Locators para Dropdowns (corregido el typo en 'dropdown')
    private readonly dropdown_menu1: Locator = this.page.locator('#dropdown-menu-1');
    private readonly dropdown_menu2: Locator = this.page.locator('#dropdown-menu-2');
    private readonly dropdown_menu3: Locator = this.page.locator('#dropdown-menu-3');

    // Locators para Checkboxes (usando el atributo 'value' para mayor precisión)
    private readonly checkbox_option1: Locator = this.page.locator('input[value="option-1"]');
    //    private readonly checkBox1 : Locator = this.page.getByText('Option 1');
    //    private readonly checkBox1 : Locator = this.page.getByRole('checkbox', { name: 'Option 1' })
    //    private readonly checkBox1 : Locator = this.page.locator('input[type="checkbox"][value="option-1"]')
    private readonly checkbox_option2: Locator = this.page.locator('input[value="option-2"]');
    private readonly checkbox_option3: Locator = this.page.locator('input[value="option-3"]');
    private readonly checkbox_option4: Locator = this.page.locator('input[value="option-4"]');

    // Locators para Radio Buttons (usando el atributo 'value' y el name='color')
    // Todos los radio buttons tienen el mismo name, así que los localizamos por el valor:
    private readonly radio_green: Locator = this.page.locator('input[value="green"]');
       // private readonly radioButtonG : Locator = this.page.locator('input[type="radio"][name="color"][value="green"]');
    private readonly radio_blue: Locator = this.page.locator('input[value="blue"]');
    private readonly radio_yellow: Locator = this.page.locator('input[value="yellow"]');
    private readonly radio_orange: Locator = this.page.locator('input[value="orange"]');
    private readonly radio_purple: Locator = this.page.locator('input[value="purple"]');

    // Estos parecen ser los mismos que los Dropdowns 
    // Si son selectores diferentes, habría que ajustarlos al sitio. Por ahora, los eliminamos
    // private readonly selectButton1 : Locator = this.page.locator('#dropdown-menu-1');
    // private readonly dropdownFruits : Locator = this.page.locator('#dropdown-menu-1');


    // Método de navegación
    async navigateToFormsPage(): Promise<void> {
        await this.page.goto(this.formsUrl);
        // Espera un Locator clave para asegurar la carga
        await this.dropdown_menu1.waitFor({ state: 'visible' }); 
    }



};