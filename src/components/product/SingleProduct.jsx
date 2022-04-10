import React, { Fragment, useEffect } from "react";
import Pagination from "../common/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../actions/product";
import ShowImage from "../common/ShowImage";
import { productIdValditor } from "../../utils/idvalidator";
import { Redirect } from "react-router";

const SingleProduct = ({ match }) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productIdValditor(match.params.id))
      dispatch(getSingleProduct(match.params.id));
  }, []);

  if (!productIdValditor(match.params.id)) {
    return <Redirect to="/404" />;
  }

  return (
    <Fragment>
      <section className="term-content">
        <header>
          <h1>{product.title}</h1>
        </header>
        <div className="row">
          <div className="col-md-8 col-sm-12 col-xs-12 pull-left">
            <section className="term-description">
              <ShowImage image={product.imageUrl} />

              <p>{product.info}</p>

              <h2> توضیحات محصول </h2>
              <ul>
                <li>
                  {" "}
                  <h3>
                    {" "}
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </h3>{" "}
                </li>
              </ul>
            </section>

            <section className="user-comments">
              <header>
                <h3> نظرات خریداران </h3>
              </header>
              <div className="inner">
                <form>
                  <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام و نام خانوادگی"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ایمیل"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="شماره تماس"
                        />
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="متن نظر"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-8 col-sm-7 col-xs-7">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="کد امنیتی"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-5">
                          <img src="../images/captcha.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <button type="submit" className="btn btn-success">
                        {" "}
                        ثبت دیدگاه{" "}
                      </button>
                    </div>
                  </div>
                </form>

                <div className="comment-list">
                  <div className="comment-row">
                    <img src="../images/pic/avatar.jpg" />
                    <div className="left-col">
                      <h3> میترا رحیمی </h3>
                      <span>12/03/1397</span>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                      </p>
                    </div>
                  </div>

                  <div className="comment-row">
                    <img src="../images/pic/avatar.jpg" />
                    <div className="left-col">
                      <h3> میترا رحیمی </h3>
                      <span>12/03/1397</span>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                      </p>
                    </div>
                  </div>

                  <div className="comment-row">
                    <img src="../images/pic/avatar.jpg" />
                    <div className="left-col">
                      <h3> میترا رحیمی </h3>
                      <span>12/03/1397</span>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                      </p>
                    </div>
                  </div>

                  <div className="comment-row">
                    <img src="../images/pic/avatar.jpg" />
                    <div className="left-col">
                      <h3> میترا رحیمی </h3>
                      <span>12/03/1397</span>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                      </p>
                    </div>
                  </div>

                  <div className="comment-row">
                    <img src="../images/pic/avatar.jpg" />
                    <div className="left-col">
                      <h3> میترا رحیمی </h3>
                      <span>12/03/1397</span>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                      </p>
                    </div>
                  </div>

                  <Pagination />
                </div>
              </div>
            </section>
          </div>

          <aside className="col-md-4 col-sm-12 col-xs-12 pull-right">
            <div className="statistics">
              <ul>
                <li>
                  <span> قیمت محصول  </span>
                  <i> 700000 </i>
                </li>
                <li>
                  <span> تعداد موجود </span>
                  <i> 16 </i>
                </li>
                <li>
                  <span> تخفیف  </span>
                  <i> 20%  </i>
                </li>
              </ul>

              <a href=""> خرید محصول  : 700000 تومان </a>
            </div>

            <article className="teacher-info">
              <img src="../images/pic/avatar.jpg" />
              <h2>فروشگاه</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است استفاده از طراحان گرافیک است ...
              </p>
            </article>

            <article className="term-info">
              <h2> اطلاعات این محصول </h2>
              <ul>
                <li>اطلاعات فنی</li>
                <li>نظرات کاربران</li>
                
              </ul>
            </article>

            <div className="share-layer">
              <span> به اشتراک گذاری </span>
              <a href="">
                <i className="zmdi zmdi-facebook"></i>
              </a>
              <a href="">
                <i className="zmdi zmdi-google-old"></i>
              </a>
              <a href="">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a href="">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>

            <div className="tags-layer">
              <a href=""> خرید </a>
              <a href="">محصول</a>
              <a href=""> محصول دیجیتال </a>
              <a href=""> موبایل </a>
              <a href=""> لوازم جانبی </a>
              <a href=""> فروشگاه </a>
              <a href=""> تخفیف دار </a>
            </div>
          </aside>
        </div>
      </section>
    </Fragment>
  );
};

export default SingleProduct;
