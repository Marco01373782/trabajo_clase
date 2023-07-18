function galletas(tamaño, ingredientes) {
    this.tamaño = tamaño;
    this.ingredientes = ingredientes;
    

}
function producirGalletas() {
    const galletas = [];
}
    for (let i = 0; i < 5; i++) {
      const galleta = new Galleta(10, ['harina', 'azúcar', 'mantequilla']);
    }
    if (i === 3) {
        console.log("¡Error en la galleta número"+i); 
        console.log(`Se requiere reincorporar el ingrediente secreto y reducir el tamaño de la galleta.`)
        galleta.agregarIngredienteSecreto('ingrediente secreto');
        galleta.reducirTamaño();
    } 
console.log (galletas);

const galletasProducidas = producirGalletas();
for (let i = 0; i < galletasProducidas.length; i++) {
    console.log(`Galleta número ${i + 1}:`);

}

