class Meme {
    id;
    name;
    image;
    dateModified;
    constructor (id, name, image, dateModified){
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
    }
    show() {
        console.log ('Tên của meme là: ' + this.name);
        console.log ('Link ảnh: ' + this.image);
        console.log ('Ngày tạo: ' + this.dateModified);
    }
}

var meme1 = new Meme('1', 'chúa hề', 'https://i.pinimg.com/originals/75/31/5d/75315db511a058432745fc37d82a7c44.png', '23/1/2021')
var meme2 = new Meme('2', 'dog', 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/10/meme-hong-hot.jpg', '23/1/2021')
meme1.show();
console.log ('=============')
meme2.show();
console.log (meme1);
console.log (meme2);