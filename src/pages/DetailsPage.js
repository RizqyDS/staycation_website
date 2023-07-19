import React, { Component } from 'react'

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";

import ItemsDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }

  render() {
    const breadcrumb = [
        {pageTitle: "Home", pageHref: ""},
        {pageTitle: "House Details", pageHref: "" }
    ];

    return (
        <>
          <Header {...this.props}></Header>
          <PageDetailTitle
            breadcrumb={breadcrumb}
            data={ItemsDetails}
          ></PageDetailTitle>
          <FeaturedImage data={ItemsDetails.imageUrls}></FeaturedImage>
        </>
    );
  }
}