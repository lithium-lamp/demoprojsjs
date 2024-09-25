class Something {
    name = "Something Good";
    constructor(element) {
        this.onclick2 = this.onclick2.bind(this);
        element.addEventListener("click", this, false);
        element.addEventListener("dblclick", this, false);
    }
    handleEvent(event) {
        console.log(this.name); // 'Something Good', as this is bound to newly created object
        switch (event.type) {
          case "click":
                alert("one");
            break;
          case "dblclick":
                alert("two");
            break;
        }
      }
}
  
const s = new Something(document.body);

let cont = document.getElementsByClassName("container");

cont.appendChild(s);