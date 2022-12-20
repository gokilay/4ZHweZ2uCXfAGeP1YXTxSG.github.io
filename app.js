const url = document.querySelector(".input-text");
const api = "https://api.vermitele.ml";

const primero = document.querySelector(".inicio");
const cargando = document.querySelector(".cargando");
const form1 = document.querySelector(".primero");

function ver() {
  form1.hidden = true;
  cargando.hidden = false;
  axios
    .get(`${api}/get?url=${url.value}`)
    .then(function (response) {
      if (response.data.error) {
        alert(response.data.error);
        form1.hidden = false;
        cargando.hidden = true;
      } else {
        primero.hidden = true;
        document.body.innerHTML = `<div id="iframe"><iframe width="100%" height="100%" src="https://magic.casadragon.ml/index.html?u=${response.data.stream}&i=${response.data.image}" frameborder="0" allow="autoplay" allowfullscreen="allowfullscreen"></iframe></div>`;
        return response;
      }
    })
    .catch(function (error) {
      alert("Se ha producido un error, vuelve a intentarlo mas tarde.");
      form1.hidden = false;
      cargando.hidden = true;
    });
}
