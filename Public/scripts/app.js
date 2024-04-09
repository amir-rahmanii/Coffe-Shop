let chengeTheme = document.querySelectorAll('.chengeTheme')
let componentScroll = document.querySelector('.componentScroll')
let flag = true;
let addMenuMobile = document.querySelector('#addMenuMobile')
let menuMobile = document.querySelector('.menuMobile')
let closeMenu = document.querySelectorAll('.closeMenu')
let openSubMenuMobile = document.querySelector('#openSubMenuMobile')
let openingSubMobile = document.querySelector('#openingSubMobile')
let chevron = document.querySelector('#chevron')
let overlay = document.querySelector('.overlay')
let addShoppingCart = document.querySelector('#addShoppingCart')
let shoppingCart = document.querySelector('.shoppingCart')
let flagBySubMenu = true;

window.addEventListener('load', () => {
    let theme = localStorage.getItem('theme')
    document.documentElement.classList.add(theme)
    if (theme === "dark") {
        flag = false
    }
    getComponent()
})

//desktop
chengeTheme.forEach((theme) => {
    theme.addEventListener('click', () => {
        if (flag) {
            localStorage.setItem('theme', "dark")
            document.documentElement.classList.add('dark')
            flag = false;
        } else {
            localStorage.setItem('theme', "light")
            document.documentElement.classList.remove('dark')
            flag = true;
        }
    })
})

const getComponent = () => {
    if (componentScroll.offsetHeight > 342) {
        componentScroll.style.maxHeight = '342px'
        componentScroll.style.overflowY = "scroll"
        componentScroll.style.paddingLeft = "3px"
    }
}


// menu Mobile
addMenuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('-right-64')
    menuMobile.classList.add('right-0')
    overlay.classList.add('overlay--visible')
})

const hideMenu = () => {
    menuMobile.classList.remove('right-0')
    shoppingCart.classList.remove('left-0')
    shoppingCart.classList.add('-left-64')
    menuMobile.classList.add('-right-64')
    overlay.classList.remove('overlay--visible')
}

closeMenu.forEach(close => {
    close.addEventListener('click', () => {
        hideMenu()
    })
})
overlay.addEventListener('click', () => {
    hideMenu()
})

openingSubMobile.addEventListener('click', () => {
    if (flagBySubMenu) {
        chevron.innerHTML = `<use href="#chevron-up"></use>`
        openingSubMobile.classList.add('text-orange-300')
        openSubMenuMobile.style.display = "flex"
        flagBySubMenu = false;
    } else {
        chevron.innerHTML = `<use href="#chevron-down"></use>`
        openingSubMobile.classList.remove('text-orange-300')
        openSubMenuMobile.style.display = "none"
        flagBySubMenu = true;
    }
})

//shoping mobile

addShoppingCart.addEventListener('click', () => {
    shoppingCart.classList.remove('-left-64')
    shoppingCart.classList.add('left-0')
    overlay.classList.add('overlay--visible')
})