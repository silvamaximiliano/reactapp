import "./CartWidget.css"
const CartWidget = () => {
    const ImgCarrito = "https://media.istockphoto.com/id/1206806317/es/vector/icono-del-carrito-de-compras-aislado-sobre-fondo-blanco.webp?s=612x612&w=is&k=20&c=uTT_STG3ftl-FooBCrSUJSltXdbKsFvpTmyPfyxpGvA="
    return (
        <div>
<img className="ImgCarrito" src={ImgCarrito} alt="carrio" />
<strong>3</strong>
       </div>
    )
}

export default CartWidget