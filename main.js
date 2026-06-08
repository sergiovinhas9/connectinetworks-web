/**
 * ConnecTI Networks - Lógica de Front-End
 * Autor: Consultoria de Infraestrutura (Mr Vinhas)
 * Propósito: Controle de Interface e Componentes Dinâmicos
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. Controle do Menu Mobile (Routing Visual)
    // ==========================================================================
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Animação simples do ícone hamburguer (opcional)
            menuToggle.classList.toggle('open');
        });
    }

    // Fecha o menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // ==========================================================================
    // 2. Lógica do Accordion (Portfólio de Serviços)
    // ==========================================================================
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Alterna a classe 'active' para mudar o ícone (+ / -) e a cor
            this.classList.toggle('active');

            // Seleciona o painel de conteúdo diretamente abaixo do botão clicado
            const panel = this.nextElementSibling;

            // Lógica de cálculo de altura para transição suave
            if (panel.style.maxHeight) {
                // Se já tem altura, recolhe
                panel.style.maxHeight = null;
            } else {
                // Se está recolhido, expande baseado no tamanho real do conteúdo (scrollHeight)
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            
            // Opcional: Fechar outros accordions quando um for aberto (comportamento de exclusividade)
            /*
            accordions.forEach(otherAcc => {
                if (otherAcc !== this && otherAcc.classList.contains('active')) {
                    otherAcc.classList.remove('active');
                    otherAcc.nextElementSibling.style.maxHeight = null;
                }
            });
            */
        });
    });
});