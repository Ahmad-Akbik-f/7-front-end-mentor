let f_name = document.querySelectorAll(".f-name")
let e_mail = document.querySelector(".email input")
let submit = document.querySelector("input[type='submit']")
let em = "Ahmad@gmail.com"
console.log(e_mail.placeholder)
submit.onclick = ()=>{
    f_name.forEach(el => {
        let errorMas = document.createElement("span");
        if(el.classList.contains("error")){
            el.classList.remove("error");
            el.lastChild.remove();
        }
        if(el.children[0].value == ""){
            errorMas.textContent = el.dataset.name + " cannot be empty";
            errorMas.classList.add("error-text")
            el.classList.add("error")
            el.appendChild(errorMas)
        }
    });
    if(e_mail.value != ""){
        let emailCon = /.+@.+\.\w+/ig;
        if(e_mail.value.match(emailCon) === null && e_mail.value != ""){
            if(e_mail.parentElement.classList.contains("error")){
                e_mail.parentElement.classList.remove("error");
                e_mail.parentElement.lastChild.remove();
            }
            let emas = document.createElement("span");
            emas.textContent = "Looks like this is not an email";
            console.log(emas)
            emas.classList.add("error-text")
            e_mail.parentElement.classList.add("email-error")
            e_mail.value = ""
            e_mail.placeholder = "example@gmail.com"
            e_mail.parentElement.classList.add("error")
            e_mail.parentElement.appendChild(emas)
        }
    }
}