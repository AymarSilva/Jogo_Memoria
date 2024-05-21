const azulejos = document.querySelector(".azulejos");
const cores = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];

const corespp = [...cores,...cores];

let prim_cor = null;
let evento = 0;

for (let i = 0; i <= 15; i++)
    {
        const elemento = document.createElement("li");
        elemento.classList.add("azulejo");

        const index_cor = Math.floor(Math.random() * corespp.length);

        elemento.setAttribute("active",false);
        elemento.setAttribute("cor_frente",corespp[index_cor]);
        corespp.splice(index_cor,1); //Tira a possibilidade de repetição removendo aquela cor neste índice
        azulejos.appendChild(elemento);

        elemento.addEventListener("click",() => {

            if(prim_cor === null)
                {
                    if(elemento.getAttribute("active") == "false")
                        {
                            prim_cor = elemento;
                            prim_cor.style.background = prim_cor.getAttribute("cor_frente");
                            prim_cor.setAttribute("active",true);
                        }
                    else
                        {
                            return;
                        };
                }
            else
                {
                    if(prim_cor === elemento)
                        {
                            prim_cor.removeAttribute("style");
                            prim_cor.setAttribute("active",false);
                            return prim_cor = null;
                        }
                    if(elemento.getAttribute("active") == "false")
                        {
                            elemento.style.background = elemento.getAttribute("cor_frente");
                            elemento.setAttribute("active",true);
                        }
                    else
                        {
                            return;
                        }

                    if(prim_cor.getAttribute("cor_frente") === elemento.getAttribute("cor_frente"))
                        {
                            prim_cor = null;
                        }
                    else
                        {
                            setTimeout(() =>
                                {

                                    prim_cor.style.background = null;
                                    prim_cor.setAttribute("active",false);

                                    elemento.style.background = null;
                                    elemento.setAttribute("active",false);

                                    prim_cor = null;

                                }, 700);
                        };
                };
                return elemento;
        });


    }