import product from "../../../public/product.jpg";

export default function Landing() {
    return(
        <section className="beside landing">
                <div className="landing-text">
                    <h1 className="title">Welcome to Alice of ShopWorld</h1>
                    <p className="landing-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu odio id neque sollicitudin congue. Vestibulum sollicitudin ac metus semper hendrerit. Ut nec tortor ut dolor pretium scelerisque. Quisque fringilla vitae diam rutrum varius. Vivamus molestie tempus mollis. Aenean bibendum tellus fermentum, bibendum ante ut, dictum felis. Fusce iaculis aliquam tristique.
                    </p>
                    <button>Shop Now</button>
                </div>
                <img className="landing-img" src={product}/>
        </section>
    );
};