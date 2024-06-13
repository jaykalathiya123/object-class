class  shape {
    constructor(pai,r) {
        this.pai = pai;
         this.r = r;
         this.var = pai*r*r; 
           document.getElementById("h1").innerHTML=(`pai:= ${this.pai} <br> rauase:= ${this.r} <br>circle method:= ${this.pai} * ${this.r} * ${this.r} <br>sum:=${this.var} `)
    }
}
class  shape2 {
    constructor(h,w) {
        this.h = h;
         this.w = w;
         this.var = h*w; 
           document.getElementById("h2").innerHTML=(`hight:= ${this.h} <br> width:= ${this.w} <br>rectangl metho:= ${this.h} * ${this.w}<br>sum:=${this.var} `)
    }
}

const sum = new  shape (3.14,3);
const sum2 = new  shape2 (2,3);
