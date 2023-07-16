let myList = [
    {
        image: 'images/pic1.jpg',
        text: 'Item Special',
        tag:'special'
    },
    {
        image: 'images/pic2.jpg',
        text: 'Item 2'
    },
    {
        image: 'images/pic3.jpg',
        text: 'Item 3'
    },
    {
        image: 'images/pic4.jpg',
        text: 'Item 4'
    },
    {
        image: 'images/pic5.jpg',
        text: 'Item 5'
    },
    {
        image: 'images/pic6.jpg',
        text: 'Item 6'
    },
    {
        image: 'images/pic7.jpg',
        text: 'Item 7'
    },
    {
        image: 'images/pic8.jpg',
        text: 'Item 8'
    },
    {
        image: 'images/pic9.jpg',
        text: 'Item 9'
    },
    {
        image: 'images/pic10.jpg',
        text: 'Item 10'
    },
    {
        image: 'images/pic1.jpg',
        text: 'Item 2'
    },
    {
        image: 'images/pic6.jpg',
        text: 'Item 3'
    },
]

let showpic = document.querySelector('.list-container')
let blank = ''
for (i=0; i<myList.length;i++){
    let data = myList[i]
    blank += `<div class="list-item ${data.tag}">
    <img src="${data.image}">
    <p>${data.text}</p>
</div>`
}
showpic.innerHTML = blank

