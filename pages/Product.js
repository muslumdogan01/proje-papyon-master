import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import productLogo from "../public/image/productLogo.png";
import productBgPhoto from "../public/image/productBg.png";
import product from "../public/image/product/product1.png";
import product2 from "../public/image/product/product2.png";
import product3 from "../public/image/product/product3.png";
import product4 from "../public/image/product/product4.png";
import product5 from "../public/image/product/product5.png";
import product6 from "../public/image/product/product6.png";
import productPhone from "../public/image/product/productPhone.svg";
import arrow from "../public/image/product/arrow.svg";

function Product() {
  return (
    <Layout>
      <Head>
        <title>Product</title>
      </Head>
      <div className="product-header">
        {/* LOGO */}
        <div className="product-logo">
          <Image src={productLogo} />
        </div>
        {/* TEXT */}
        <div className="product-text">
          <div className="product-number">
            <span className="number">10K+</span>
            <span className="text">DOWNLOAD+</span>
          </div>
          <div className="product-number">
            <span className="number">50</span>
            <span className="text">COUNTRY+</span>
          </div>
          <div className="product-number">
            <span className="number">5K+</span>
            <span className="text">ACTIVE USER +</span>
          </div>
        </div>
        {/* GALERİ */}
        <div className="product-photos">
          <div className="product-photos-bgBox">
            <Image className="bgBox" src={productBgPhoto} />
          </div>
        </div>
      </div>
      <div className="product-photos-boxs">
        <Image src={product} />
        <Image src={product2} />
        <Image src={product3} />
        <Image src={product4} />
        <Image src={product5} />
        <Image src={product6} />
      </div>
      {/* EFFECT AND LAYOUTS */}
      <div className="product-content">
        <div className="product-content-left">
          <div className="product-left-center">
            <div className="image-area"></div>
            <Image
              className="imageProduct"
              width={1000}
              height={1000}
              src={productPhone}
            />
          </div>
        </div>
        <div className="product-content-right">
          <div className="product-right-center">
            <div className="product-right-header">
              <Image src={arrow} />
              <h1>Color</h1>
            </div>
            <p>Content design creation for social media</p>
            <div className="product-right-effect">
              <h1>Effect</h1>
              <p>Content design creation for social media</p>
            </div>
            <div className="product-right-layout">
              <h1>Layouts</h1>
              <p>Content design creation for social media</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product-footer">
        <div className="product-buttons">
          <Link href="https://apps.apple.com/us/app/roosefy-story-template-design/id1563653448">
          <button>Download App Store</button>
          </Link>
         <Link href="https://play.google.com/store/apps/details?id=com.roosefy">
         <button>Download Play Store</button>
         </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
