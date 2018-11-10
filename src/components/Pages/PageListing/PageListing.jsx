import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

class PageListing extends React.Component {
  getPageList() {
    const pageList = [];
    this.props.pageEdges.forEach(pageEdge => {
      pageList.push({
        path: `/${pageEdge.node.slug}`,
        cover: pageEdge.node.cover,
        title: pageEdge.node.title,
        excerpt: pageEdge.node.excerpt,        
        authorName: pageEdge.node.author.name,
        featuredImg: pageEdge.node.featured_media ? pageEdge.node.featured_media.source_url : false,
      })
    })
    return pageList;
  }

  render() {
    const pageList = this.getPageList();
    return (
      <div>
        {/* Your page list here. */
        pageList.map(page => (
          <PageListContainer key={page.path}>
            <Link className="page-link" to={page.path} key={page.title}>
              {page.featuredImg &&
                <img src={page.featuredImg} alt={page.title} className="featured-image" />
              }
              <h3>{page.title}</h3>
              <h5>
                {page.date} by {page.authorName}
              </h5>
              <div dangerouslySetInnerHTML={{ __html: page.excerpt }} />
            </Link>
          </PageListContainer>
        ))}
      </div>
    )
  }
}

const PageListContainer = styled.div`
  margin: 50px 0;

  h3 {
    position: relative;
  }

  h3:before {
    content: '';
    width: 50px;
    background-color: #93cef5;
    height: 6px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .featured-image {
    width: 600px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .post-link {
    background: none !important;
    padding: 0 !important;
  }
`

export default PageListing
