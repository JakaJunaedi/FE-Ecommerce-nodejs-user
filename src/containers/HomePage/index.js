import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import MenuHeader from "../../components/MenuHeader";
import Carousel from 'react-elastic-carousel';
import Item from './item';
import './style.css';

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {

{/**  
const breakPoints = [
  { width:1, itemToShow: 1 },
  { width:550, itemToShow: 2 },
  { width:768, itemToShow: 3 },
  { width:1200, itemToShow: 4 }
]
 */}  

  return (
    <Layout>
      <div className="headerHome">Selamat Datang Di Ayuna</div>
      {/**
      <div className="carouselHome">
      <Carousel breakPoints={breakPoints}>
        <Item>Statu</Item>
        <Item>dua</Item>   
        <Item>Statu</Item>
        <Item>dua</Item>   
      </Carousel>
      </div>
       */}
    </Layout>
  );
};

export default HomePage;
