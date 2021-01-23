//bài 1
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

//bài 2
class hanghoa {
    id;
    name;
    price;
    nhasanxuat;
    discount;
    ngaynhap;
    constructor (id, name, price, nhasanxuat, discount, ngaynhap) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.nhasanxuat = nhasanxuat;
        this.ngaynhap = ngaynhap;
    }
}

class DoGiaDung extends hanghoa {
    doben;
    constructor (id, name, price, nhasanxuat, discount, ngaynhap, doben) {
        super(id, name, price, nhasanxuat, discount, ngaynhap);
        this.doben = doben;
    }
    discount1() {
        console.log ('Số tiền được giảm giá: ' + this.price * 0.1 + ' ' + 'đồng');
    }
}

class QuanAo extends hanghoa {
    xuatxu;
    chatlieu;
    constructor (id, name, price, nhasanxuat, discount, ngaynhap, xuatxu, chatlieu) {
        super(id, name, price, nhasanxuat, discount, ngaynhap);
        this.xuatxu = xuatxu;
        this.chatlieu = chatlieu;
    }
    discount2() {
        console.log ('Số tiền được giảm giá: ' + this.price * 0.05 + ' ' + 'đồng');
    }
}

class Food extends hanghoa {
    vi;
    constructor (id, name, price, nhasanxuat, discount, ngaynhap, vi) {
        super(id, name, price, nhasanxuat, discount, ngaynhap);
        this.vi = vi;
    }
    discount3() {
        console.log ('Số tiền được giảm giá: ' + this.price * 0.02 + ' ' + 'đồng');
    }
}

var BimBim = new Food (1, 'Bimbim', 15000, 'Hảo Hảo', 2 ,  '24/02/2021', 'cay');
console.log (BimBim);
BimBim.discount3();

var Noodle = new Food (2, 'Mì tôm Miliket', 7000, 'Hảo Hảo', 2 ,  '22/02/2021', 'chua');
console.log (Noodle);
Noodle.discount3();

var Jogger = new QuanAo (3, 'Jogger', 100000, 'Chinatown', 5, '23/01/2021', 'Trung Quốc', 'Vải thô');
console.log (Jogger);
Jogger.discount2();

var Pan = new DoGiaDung (4, 'Chảo', 2000000, 'Vietnam Coporation', 10, '23/01/2021', 'Không rỉ sét');
console.log (Pan);
Pan.discount1();


