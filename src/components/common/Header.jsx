import React from "react";

const Header = () => {
    return (
        <React.Fragment style={{}}>
            <header >
                {/* <a href="" className="logo">
                    <img src="images/mylogo.png" />
                </a> */}
                <h1>فروشگاه اینترنتی آسمان</h1>
                <h2>باکیفیت ترین محصولات بازار اکنون در دسترس شماست</h2>
                <h3> با کمترین هزینه خودت خرید کن  </h3>
            </header>
            <div >
            <div className="search-form">
                <form>
                    <input
                        type="text"
                        name=""
                        placeholder="چی لازم داری  ؟"
                    />
                    <button>
                        <i className="zmdi zmdi-search"></i>
                    </button>
                </form>
            </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
