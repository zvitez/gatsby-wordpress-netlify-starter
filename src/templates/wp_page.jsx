import React, { Component } from 'react'
import styled from 'styled-components'
import TopNavigation from '../components/Layout/Navigation/Navigation'

class wpPage extends Component {
  render() {
    const pageNode = this.props.data.wordpressPage;    

    return (
      <div>
        <TopNavigation />
        <MainContentContainer>
          <h1>{pageNode.title}</h1>        
          <main>
            <div dangerouslySetInnerHTML={{ __html: pageNode.content }} />
          </main>
        </MainContentContainer>
      </div>
    )
  }
}

export default wpPage

const MainContentContainer = styled.main`
  max-width: 800px;
  margin: 50px auto;

  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
    margin-bottom: 25px;
  }

  pre {
    background-color: grey;
  }
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query WordpressPage($id: String) {
    wordpressPage(id: { eq: $id }) {
      id
      wordpress_id
      slug
      title
      template
      content
    }
  }
`
