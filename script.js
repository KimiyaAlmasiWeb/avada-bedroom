const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))





const showHam = document.querySelector('.list')
const div1 = document.querySelector('.div-ham')
const closeHam = document.querySelector('.d-none3')
flag = 0
showHam.addEventListener('click', () => {
    if (flag == 0) {
        div1.style.display = 'block'
        showHam.style.display = 'none'
        closeHam.style.display = 'block'

        flag = 1
    }
})
closeHam.addEventListener('click', () => {
    if (flag = 1) {
        div1.style.display = 'none'
        showHam.style.display = 'block'
        closeHam.style.display = 'none'

        flag = 0
    }
})



const downChevron = document.querySelector('.down1')
const upChevron = document.querySelector('.d-none1')
const Alter = document.querySelector('.Alt')

const downChevron1 = document.querySelector('.down2')
const upChevron2 = document.querySelector('.d-none2')
const bed = document.querySelector('.bedroom')
const bed1 = document.querySelector('.bedroom1')
let zarf = 0
downChevron.addEventListener('click', () => {
    if (zarf == 0) {
        downChevron.style.display = 'none'
        upChevron.style.display = 'block'
        Alter.style.display = 'block'
        zarf = 1
    }
})
upChevron.addEventListener('click', () => {
    if (zarf == 1) {
        downChevron.style.display = 'block'
        upChevron.style.display = 'none'
        Alter.style.display = 'none'
        zarf = 0
    }
})
let zarf1 = 0
downChevron1.addEventListener('click', () => {
    if (zarf1 == 0) {
        downChevron1.style.display = 'none'
        upChevron2.style.display = 'block'
        bed.style.display = 'block'
        bed1.style.display = 'block'
        zarf1 = 1
    }
})
upChevron2.addEventListener('click', () => {
    if (zarf1 == 1) {
        downChevron1.style.display = 'block'
        upChevron2.style.display = 'none'
        bed.style.display = 'none'
        bed1.style.display = 'none'
        zarf1 = 0
    }
})
const quest = document.querySelector('.number')

const iconTop = document.querySelector('.i1')
const iconDown = document.querySelector('.i2')
let temp = 0
iconTop.addEventListener('click', () => {

    quest.textContent = temp += 1
})

iconDown.addEventListener('click', () => {
    quest.textContent = temp -= 1
    if (temp <= 0) {
        quest.textContent = 0
        temp = 0
    }
})









const spRooms = document.querySelector('.roomss>span')

const rooms1 = document.querySelector('.rooms2')
const boutique = document.querySelector('.spp1')
const luxury = document.querySelector('.spp2')

const inpRooms = document.querySelector('.roomss')
let boshghab = 0
inpRooms.addEventListener('click', () => {
    if (boshghab == 0) {
        rooms1.style.display = 'block'
        boshghab = 1
    } else {
        rooms1.style.display = 'none'
        boshghab = 0
    }
})
let n = 0
boutique.addEventListener('click', () => {
    if (n == 0) {
        rooms1.style.display = 'none'
        spRooms.textContent = 'Boutique'
        n = 1

    } else {

        rooms1.style.display = 'block'
        spRooms.textContent = 'Boutique'
        n = 0
    }
})
let a = 0
luxury.addEventListener('click', () => {
    if (a == 0) {
        rooms1.style.display = 'none'
        spRooms.textContent = 'Luxury'
        a = 1

    } else {
        rooms1.style.display = 'block'
        spRooms.textContent = 'Luxury'
        a = 0
    }
})



const button01 = document.querySelector('.hight')
const a01 = document.querySelector('.hight>a')
let mouse = 0
button01.addEventListener('mouseenter', () => {
    if (mouse == 0) {
        a01.classList.remove('animate1')
        a01.classList.add('animate')
        mouse = 1
    }
})
button01.addEventListener('mouseleave', () => {
    if (mouse == 1) {
        a01.classList.remove('animate')
        a01.classList.add('animate1')
        mouse = 0
    }
})


const button02 = document.querySelector('.button11')
const a11 = document.querySelector('.a1')
let famouse = 0
button02.addEventListener('mouseenter', () => {
    if (famouse == 0) {
        a11.classList.remove('animate1')
        a11.classList.add('animate')
        famouse = 1
    }
})
button02.addEventListener('mouseleave', () => {
    if (famouse == 1) {
        a11.classList.remove('animate')
        a11.classList.add('animate1')
        famouse = 0
    }
})


const button022 = document.querySelector('.hight5')
const a111 = document.querySelector('.hight5>a')
let faamouse = 0
button022.addEventListener('mouseenter', () => {
    if (faamouse == 0) {
        a111.classList.remove('animate1')
        a111.classList.add('animate')
        faamouse = 1
    }
})
button022.addEventListener('mouseleave', () => {
    if (faamouse == 1) {
        a111.classList.remove('animate')
        a111.classList.add('animate1')
        faamouse = 0
    }
})

const button0222 = document.querySelector('.hight6')
const a1111 = document.querySelector('.hight6>a')
let faaamouse = 0
button0222.addEventListener('mouseenter', () => {
    if (faaamouse == 0) {
        a1111.classList.remove('animate1')
        a1111.classList.add('animate')
        faaamouse = 1
    }
})
button0222.addEventListener('mouseleave', () => {
    if (faaamouse == 1) {
        a1111.classList.remove('animate')
        a1111.classList.add('animate1')
        faaamouse = 0
    }
})
const button222 = document.querySelector('.hight7')
const a1111a = document.querySelector('.hight7>a')
let faaa = 0
button222.addEventListener('mouseenter', () => {
    if (faaa == 0) {
        a1111a.classList.remove('animate1')
        a1111a.classList.add('animate')
        faaa = 1
    }
})
button222.addEventListener('mouseleave', () => {
    if (faaa == 1) {
        a1111a.classList.remove('animate')
        a1111a.classList.add('animate1')
        faaa = 0
    }
})

const buttonn222 = document.querySelector('.hight8')
const aa1111a = document.querySelector('.hight8>a')
let fffaaa = 0
buttonn222.addEventListener('mouseenter', () => {
    if (faaa == 0) {
        aa1111a.classList.remove('animate1')
        aa1111a.classList.add('animate')
        fffaaa = 1
    }
})
buttonn222.addEventListener('mouseleave', () => {
    if (fffaaa == 1) {
        aa1111a.classList.remove('animate')
        aa1111a.classList.add('animate1')
        fffaaa = 0
    }
})

const buttonf22 = document.querySelector('.hight9')
const a111af = document.querySelector('.hight9>a')
let ffaa = 0
buttonf22.addEventListener('mouseenter', () => {
    if (ffaa == 0) {
        a111af.classList.remove('animate1')
        a111af.classList.add('animate')
        ffaa = 1
    }
})
buttonf22.addEventListener('mouseleave', () => {
    if (ffaa == 1) {
        a111af.classList.remove('animate')
        a111af.classList.add('animate1')
        ffaa = 0
    }
})









const spRooms1 = document.querySelector('.roomss1>span')

const roomss22 = document.querySelector('.rooms22')
const boutique1 = document.querySelector('.spp11')
const luxury1 = document.querySelector('.spp22')

const inpRooms1 = document.querySelector('.roomss1')
let boshghab1 = 0
inpRooms1.addEventListener('click', () => {
    if (boshghab1 == 0) {
        roomss22.style.display = 'block'
        boshghab1 = 1
    } else {
        roomss22.style.display = 'none'
        boshghab1 = 0
    }
})

let na = 0
boutique1.addEventListener('click', () => {
    if (na == 0) {
        roomss22.style.display = 'none'
        spRooms1.textContent = 'Boutique'
        na = 1

    } else {

        roomss22.style.display = 'block'
        spRooms1.textContent = 'Boutique'
        na = 0
    }
})
let a1 = 0
luxury1.addEventListener('click', () => {
    if (a1 == 0) {
        roomss22.style.display = 'none'
        spRooms1.textContent = 'Luxury'
        a1 = 1

    } else {
        roomss22.style.display = 'block'
        spRooms1.textContent = 'Luxury'
        a1 = 0
    }
})