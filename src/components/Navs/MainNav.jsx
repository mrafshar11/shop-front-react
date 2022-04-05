import React from "react";

const MainNav = () => {
    return (
        <div className="main-menu">
            <div className="container">
                <nav>
                    <span className="responsive-sign">
                        <i className="zmdi zmdi-menu"></i>
                    </span>
                    <ul>
                        <li>
                            <a href="">کالای دیجیتال و  موبایل </a>
                            <ul>
                                <li>
                                    <a href=""> موبایل  </a>
                                </li>
                                <li>
                                    <a href="">  لپتاب </a>
                                </li>
                                <li>
                                    <a href="">  لوازم جانبی </a>
                                </li>
                                <li>
                                    <a href="">  لوازم برقی خانگی </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="">کالای سوپرمارکتی</a>
                            <ul>
                                <li>
                                    <a href=""> مواد پروتینی</a>
                                </li>
                                <li>
                                    <a href=""> خشکبار</a>
                                </li>
                                <li>
                                    <a href="">مواد شوینده</a>
                                </li>
                                <li>
                                    <a href="">سایر</a>
                                </li>
                              
                            </ul>
                        </li>
                        <li>
                            <a href=""> سرگرمی و اسباب بازی </a>
                        </li>
                        <li>
                            <a href="">مد و پوشاک</a>
                            <ul>
                                <li>
                                    <a href="">پسرانه</a>
                                </li>
                                <li>
                                    <a href=""> دخترانه </a>
                                </li>
                                <li>
                                    <a href=""> کودک </a>
                                </li>
                                <li>
                                    <a href=""> آکسسوری </a>
                                </li>
                              
                            </ul>
                        </li>
                        <li>
                            <a href="">زیبایی و سلامت</a>
                        </li>
                        <li>
                            <a href=""> کتاب و لوازم التحریر </a>
                        </li>
                        <li>
                            <a href="">ورزش و سفر</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MainNav;
