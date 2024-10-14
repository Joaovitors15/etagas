/**
 * PWA - Flex
 * @author joão vitor souto 
 * @link https://github.com/Joaovitors15/etagas.git
 */

function calcular() {
    // pegar valores dos inputs
    let gasolina = Number(document.getElementById('gasolina').value)
    let etanol = Number(document.getElementById('etanol').value)
    let kmlGasolina = Number(document.getElementById('kmGasolina').value)
    let kmlEtanol = Number(document.getElementById('kmEtanol').value)
    // calcular a vantagem
    if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
        document.getElementById("status").src = "./img/etanol.png"
    } else {
        document.getElementById("status").src = "./img/gasolina.png"
    }

}