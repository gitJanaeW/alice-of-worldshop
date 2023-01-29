export default function Cart() {
    return(
        <div className="cart">
            <h2>Shopping Cart</h2>
            <p>Price</p>
            <hr/>
            <div className="item">
                <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt=""/>
                <div>
                    <h3>Item Name Goes Here</h3>
                    <p>$109.95</p>
                </div>
                <p>In stock</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu odio id neque sollicitudin congue. Vestibulum sollicitudin ac metus semper hendrerit.</p>
                <select name="qty">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                </select>
                <hr/>
            </div>
            <div className="item">
                <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt=""/>
                <div>
                    <h3>Item Name Goes Here</h3>
                    <p>$7.97</p>
                </div>
                <p>In stock</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu odio id neque sollicitudin congue. Vestibulum sollicitudin ac metus semper hendrerit.</p>
                <select name="qty">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                </select>
                <hr/>
            </div>
            <p>Total:</p>
            <button>Checkout</button>
        </div>
    )
}