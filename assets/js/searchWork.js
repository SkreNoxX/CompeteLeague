window.onload = () => {
    let input = document.querySelector('input');
    input.oninput = function(){
        let value = this.value.trim();
        let list1 = document.querySelectorAll('.work');
        if (value != ''){
            list1.forEach(elem => {
                if (elem.innerText.search(value) == -1){
                    elem.classList.add('hide');
                }
            });
        }
        else{
            list1.forEach(elem => {
                elem.classList.remove('hide');
            });
        }
        console.log(this.value);
    }
};