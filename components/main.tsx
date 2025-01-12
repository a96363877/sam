'use client'

import { useState } from 'react'
import Image from 'next/image'


export default function Home() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addToCart = (product:any) => {
    setCart([...cart!, product!])
    setTotal(total + parseFloat(product.price))
  }

  return (
    <>
      <div className="__className">
        <div className="MainContainer_childWrapper">
          <div className="MainContainer_headerContainer5N">
            <header className="Header_header__HSEQ9 Header_show">
              <div className="Header_nav">
                <div className="Header_logoWithCatalog">
                  <a
                    rel="noopener noreferrer"
                    data-analytic-label="logo"
                    data-analytic-element-location="header"
                    data-test-id="snoonulogo"
                    className="Logo_logo__oq6_b"
                    href="#"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <Image
                        alt="Snoonu"
                        src="/22.PNG"
                        layout="fill"
                        className="Logo_fullLogo__l2rPp"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </span>
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <Image
                        alt="Snoonu"
                        src="/22.PNG"
                        layout="fill"
                        className="Logo_miniLogo__W0OJP"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </span>
                  </a>
                  <div className="CatalogMenu_wrapper">
                    <button
                      className="Button_button Button_secondary Button_small CatalogButton_button__wTnA9"
                      data-analytic-label="catalogMenuButton"
                      data-analytic-element-location="header"
                    >
                      <span className="Button_content">
                        <span
                          data-test-id=""
                          className="Icon_icon Button_icon__Shlur"
                        >
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                            }}
                          >
                            <Image
                              alt="icon"
                              src="/menu.4fcd2317.svg"
                              layout="fill"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                              }}
                            />
                          </span>
                        </span>
                        <span className="CatalogButton_text">القائمة</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="Search_wrappe">
                  <div>
                    <span data-test-id="" className="Icon_icon">
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          overflow: 'hidden',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <Image
                          alt="icon"
                          src="/arrow_left.92b153fa.svg"
                          layout="fill"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <form action="#" className="Search_searchWrappe">
                    <div className="SearchSelector_wrapper__P_w2s">
                      <div className="SearchSelector_selector">
                        <p className="Typography_p8 SearchSelector_label">
                          جميع الأقسام
                        </p>
                        <span
                          data-test-id=""
                          className="Icon_icon"
                          style={{ width: 16, height: 16 }}
                        >
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                            }}
                          >
                            <Image
                              alt="icon"
                              src="/chevron_down_gray.c120c600.svg"
                              layout="fill"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="Autocomplete_wrapper">
                      <span
                        data-test-id=""
                        className="Icon_icon Autocomplete_searchIcon   Autocomplete_smallIcon   Search_searchIcon__4o9Ok"
                      >
                        <span
                          style={{
                            boxSizing: 'border-box',
                            display: 'block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <Image
                            alt="icon"
                            src="/search.8dc73f65.svg"
                            layout="fill"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'none',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                            }}
                          />
                        </span>
                      </span>
                      <input
                        data-test-id="searchField"
                        name="search"
                        className="Autocomplete_input__35ZrS Autocomplete_small__kgTkO Search_input__djH_7"
                        placeholder="ابحث عن منتج"
                        autoComplete="off"
                        type="search"
                      />
                      <div className="Autocomplete_rightSection">
                        <button
                          data-test-id="searchFieldBtn"
                          className="SearchButton_button  "
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon"
                            style={{ width: 20, height: 20 }}
                          >
                            <span
                              style={{
                                boxSizing: 'border-box',
                                display: 'block',
                                overflow: 'hidden',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                              }}
                            >
                              <Image
                                alt="icon"
                                src="/search_white.svg"
                                layout="fill"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  bottom: 0,
                                  right: 0,
                                  boxSizing: 'border-box',
                                  padding: 0,
                                  border: 'none',
                                  margin: 'auto',
                                  display: 'block',
                                  width: 0,
                                  height: 0,
                                  minWidth: '100%',
                                  maxWidth: '100%',
                                  minHeight: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain',
                                }}
                              />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="Header_sideWrapper">
                  <div
                    className="CartButton_wrapper"
                    style={{ display: 'block' }}
                  >
                    <button
                      className="Button_button Button_primary Button_small"
                      data-test-id="cartBtn"
                      data-analytic-label="cartButton"
                      data-analytic-element-location="header"
                    >
                      <span className="Button_content">
                        <span
                          data-test-id=""
                          className="Icon_icon Button_icon__Shlur"
                        >
                          <span className="minus">
                            <Image
                              alt="icon"
                              src="/cart.svg"
                              width={24}
                              height={24}
                              className="asyncicon"
                            />
                          </span>
                        </span>
                        <div className="CartButton_cartButton  ">
                          <span>{total.toFixed(3)}</span> د.ك
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="ContentWrapper_container">
            <h1 className="Typography_h1__cT2UT">أسماك الوطنية</h1>
            <p className="Typography_p7  Description_text__qN1Uu">
              اكتشف منتجاتنا عالية الجودة من الأسماك الطازجة والمستوردة
              والروبيان المميز، اطلب الآن مع أفضل وأسرع خدمة توصيل اونلاين.
            </p>
            <div className="Carousel_wrapper">
              <div className="Carousel_navButtonWrapper__gL_66">
                <div
                  data-analytic-label="carouselButtonPrev"
                  data-analytic-event-content="subCategories"
                  className="NavButton_wrapper__iJpe4 NavButton_prev__lHoNZ"
                >
                  <span
                    data-test-id=""
                    className="Icon_icon"
                    style={{ width: 24, height: 24 }}
                  >
                    <span className="minus">
                      <Image
                        alt="icon"
                        src="/carousel_arrow_left.9172eaa1.svg"
                        width={24}
                        height={24}
                        className="asyncicon"
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className="Carousel_carousel__SoVOb SubCategories_row">
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={181}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                         
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">
                      عروض
                    </p>
                  </div>
                </div>
                {/* Add more subcategory cards here */}
              </div>
              <div className="Carousel_navButtonWrapper__gL_66" />
            </div>
            <div className="FilterPresets_wrapper__sSfR_">
              {/* Add filter presets here */}
            </div>
          </div>
          <div id="productList" className="ContentWrapper_container">
            <div
              className="MerchantCard_wrapper__ATC0P"
              style={{ margin: '-11px', borderRadius: '24px 24px 0 0' }}
            >
              {/* Add merchant card content here */}
            </div>
            <div className="_slug__merchantDetailsWrapper__Ni_d0">
              {/* Add merchant details here */}
            </div>
            <div className="BestSelling_wrapper__QVPK0 quantities_1">
              <h2 className="Typography_h2__Gzo5Y BestSelling_title__NuZ2_">
                عروض اليوم
              </h2>
              <div
                className="BestSelling_group__aDxsJ"
                style={{ position: 'relative', overflow: 'scroll' }}
              >
                {/* Add best selling products here */}
              </div>
            </div>
            <div className="Products_wrapper__DZlbk quantities_2">
              <h2
                className="Typography_h2__Gzo5Y Products_title__qA1wA"
                style={{ margin: 0 }}
              >
                &nbsp;
              </h2>
              <div className="Products_group__gsBas">
                {/* Add product list here */}
              </div>
            </div>
          </div>
        </div>
        {/* Add shopping cart model here */}
      </div>
      {/* Add loader here */}
    </>
  )
}

