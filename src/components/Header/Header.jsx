function Header(){
    const comision = "40295"
    function mostrarComision(){
        console.log("log")
        return `Bienvenida comisión ${comision}` 
      }
      //css in js
      const stylesH1 = {
        backgroundColor: "lightblue",
        padding: "10px",
        margin: "0 auto",
        textAlign: "center"
      }
      
    return (
        <div>
            <h1 style={stylesH1}> {mostrarComision()}</h1>
        </div>
    )
}

export default Header