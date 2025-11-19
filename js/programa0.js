document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Seleciona o link 'Cadastro'
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    // Seleciona o sub-menu (ul.dropdown-menu)
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // 1. Toggle do Menu principal (Hamburger)
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            // Alterna a classe que exibe/oculta os links principais
            navLinks.classList.toggle('active');
            
            // Oculta o dropdown se o menu principal for fechado
            if (!navLinks.classList.contains('active') && dropdownMenu) {
                dropdownMenu.classList.remove('open');
                
                // Garante que o ícone do dropdown volte para baixo (▼) quando o menu principal é fechado
                if (dropdownToggle && dropdownToggle.innerHTML.includes('▲')) {
                    dropdownToggle.innerHTML = dropdownToggle.innerHTML.replace('▲', '▼');
                }
            }
        });
    }

    // 2. Toggle do Sub-menu Dropdown (Funciona para mobile/click)
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault(); // Impede a navegação do link '#'
            // Alterna a classe que exibe/oculta o sub-menu
            dropdownMenu.classList.toggle('open');
            
            // Alterna o ícone (▼ e ▲) para indicar o estado
            this.innerHTML = this.innerHTML.includes('▲') ? 
                             this.innerHTML.replace('▲', '▼') : 
                             this.innerHTML.replace('▼', '▲');
        });
    }
});