import React, { useState } from "react";
import Pagination from "../common/Pagination";
import { useSelector } from "react-redux";
import { paginate } from "../../utils/paginate";
import Product from './Product';

const Archive = () => {
    const [perPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const products = useSelector(state => state.products);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    const archiveProducts = paginate(products, currentPage, perPage);

    return (
        <section className="term-categories">
            <div className="top-bar">
                <header>
                    <h1>
                        {" "}
                        دوره های <span> برنامه نویسی وب </span>{" "}
                    </h1>{" "}
                    <span> {products.length} محصول </span>
                </header>

                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12 pull-right">
                        <form action="" method="">
                            <div className="input">
                                <input
                                    type="text"
                                    name=""
                                    placeholder="محصول مورد نظر ..."
                                />
                                <button>
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 pull-right">
                        <div className="switch-field available">
                            <input
                                id="available-filter-1"
                                name="available"
                                value="all"
                                checked=""
                                type="radio"
                            />
                            <label for="available-filter-1"> همه </label>
                            <input
                                id="available-filter-2"
                                name="available"
                                value="off"
                                type="radio"
                            />
                            <label for="available-filter-2"> ویژه </label>
                            <input
                                id="available-filter-3"
                                name="available"
                                value="normal"
                                type="radio"
                            />
                            <label for="available-filter-3"> باتخفیف </label>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 pull-left">
                        <div className="select-ddl">
                            <select>
                                <option> مرتب سازی </option>
                                <option> قیمت </option>
                                <option> تخفیف دار </option>
                                <option> تاریخ انتشار </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <aside className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <section className="aside-section filter-by-category">
                        <header>
                            <h3> دسته بندی محصولات </h3>
                        </header>
                        <div className="inner">
                            <ul>
                                <li>
                                    <input type="checkbox" name="" id="cat-1" />
                                    <label for="cat-1"> دیجیتال </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-2" />
                                    <label for="cat-2">
                                        {" "}
                                          مد و پوشاک{" "}
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-3" />
                                    <label for="cat-3">کتاب و لوازم التحریر</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-4" />
                                    <label for="cat-4">
                                        {" "}
                                         ورزش و سفر {" "}
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-5" />
                                    <label for="cat-5">کالای سوپرمارکتی</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-6" />
                                    <label for="cat-6">
                                        {" "}
                                        اسباب بازی و سرگرمی  {" "}
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-7" />
                                    <label for="cat-7"> خانه و آشپزخانه </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-8" />
                                    <label for="cat-8">
                                        {" "}
                                        محصولات بومی  {" "}
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-9" />
                                    <label for="cat-9"> نرم افزار </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id="cat-10"
                                    />
                                    <label for="cat-10">
                                        {" "}
                                        مواد شوینده  {" "}
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </section>
                </aside>

                <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                    <section className="terms-items">
                        <div className="row">
                            <Product products={archiveProducts} />
                        </div>

                        <Pagination
                            totalProduct={products.length}
                            currentPage={currentPage}
                            perPage={perPage}
                            onPageChange={handlePageChange}
                        />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Archive;
