import { getWords } from "./services.js";

document.addEventListener("DOMContentLoaded", function () {
    const manageMobileMenu = () => {
        const hamburgerIcon = document.getElementById('js-hamburger')
        const mobileMenu = document.querySelector('.o-header__mobile-menu')

        hamburgerIcon.addEventListener('click', () => {
            mobileMenu.classList.toggle('active')
        })
    }

    const searchWithWord = () => {
        const searchInput = document.getElementById('js-search')
        const language = navigator.language === 'tr-TR' ? 'turkish' : 'kazak' 
        const resultsWrapper = document.querySelector('.c-dictionary__searchbar-results')
        
        searchInput.addEventListener('input', () => {
            if(searchInput.value.length >= 3 ) {
                getWords(language, searchInput.value).then(response => {
                    resultsWrapper.innerHTML = '';
                    if(response.data.length > 0) {
                        response.data.forEach(item => {
                            const text = `<p class="c-dictionary__searchbar-item">${item.word}</p>`
                            resultsWrapper.insertAdjacentHTML('beforeend', text)
                            resultsWrapper.classList.add('active')
                        });
                    } else {
                        const errorMsg = '<span>Sonuç Bulunamadı...</span>'
                        resultsWrapper.insertAdjacentHTML('beforeend',errorMsg)
                        resultsWrapper.classList.add('active')
                    }
                }).then(() => {
                    const searchResultItem = document.querySelector('.c-dictionary__searchbar-item')
    
                    searchResultItem?.addEventListener('click', (e) => {
                        searchInput.value = e.currentTarget.innerText
                        resultsWrapper.classList.remove('active')
                    })
                })

            } else {
                resultsWrapper.classList.remove('active')
            }
        })
    }


    manageMobileMenu();
    searchWithWord();
});
