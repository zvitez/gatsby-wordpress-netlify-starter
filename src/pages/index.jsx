import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PostListing from '../components/Posts/PostListing/PostListing'
import PageListing from '../components/Pages/PageListing/PageListing'
import SEO from '../components/Accessories/SEO/SEO'
import config from '../../data/SiteConfig'
import TopNavigation from '../components/Layout/Navigation/Navigation'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allWordpressPost.edges
    const pageEdges = this.props.data.allWordpressPage.edges
    return (
      <HomeContainer>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <TopNavigation />
        <MainContentContainer>          
          <PostListing postEdges={postEdges} />
        </MainContentContainer>
      </HomeContainer>
    )
  }
}

export default Index

const HomeContainer = styled.div``

const Divider = styled.div`
  margin: 50px 0;
  border-bottom: 1px solid darkgray;
`

const MainContentContainer = styled.main`
  max-width: 700px;  
  margin: auto;  
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost(filter: {fields: {deploy: {eq: true}}}) {
      edges {
        node {
          date
          slug
          title
          modified
          excerpt
          id
          featured_media {
            source_url
          }
          author {
            name
          }
          categories {
            name
          }
          content
        }
      }
    }
    allWordpressPage{
      totalCount
      edges {
        node {        
          date
          slug
          title
          modified
          excerpt
          id        
          author {                        
            name
          }
          content
        }
      }
    }
  }
`
