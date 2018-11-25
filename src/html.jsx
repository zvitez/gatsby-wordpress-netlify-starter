/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";
import favicon from "./favicon.png";
import faviconApple from "./apple-touch-icon.png";
import favicon32 from "./favicon-32x32.png";
import favicon16 from "./favicon-16x16.png";
import maskIcon from "./safari-pinned-tab.svg";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e);
  }
}


export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon" sizes="180x180" href={faviconApple}/>
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>      
          <link rel="mask-icon" href={maskIcon} color="#707172"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
