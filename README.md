# gatsby-graphcms-example

Headless fork of [@GraphCMS/gatsby-graphcms-example](https://github.com/GraphCMS/gatsby-graphcms-example)

Example of [@GraphCMS/gatsby-source-graphcms](https://github.com/GraphCMS/gatsby-source-graphcms)
Please file any issues [over there](https://github.com/GraphCMS/gatsby-source-graphcms/issues) and label them `example`.

## Install

1. `git clone https://github.com/GraphCMS/gatsby-graphcms-example.git && cd gatsby-graphcms-example/`
1. `yarn && yarn develop`

## Graph<em>i</em>QL

For an kitchen sink Graph<em>i</em>QL query you can run on Gatsby’s
graphql debugger at <http://localhost:8000/___graphql>, try this
link to preload with `gatsby develop` running:

[Preload kitchen sink Graph<em>i</em>QL query](http://localhost:8000/___graphql?query=%7B%0A%20%20artists%3A%20allArtists%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20picture%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20handle%0A%20%20%20%20%20%20%20%20%20%20width%0A%20%20%20%20%20%20%20%20%20%20height%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20records%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20records%3A%20allRecords%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20artist%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20tracks%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20aliasedLength%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20cover%20%7B%0A%20%20%20%20%20%20%20%20%20%20handle%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20reviews%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20reviews%3A%20allReviews%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20record%20%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20artist%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20review%0A%20%20%20%20%20%20%20%20rating%0A%20%20%20%20%20%20%20%20comments%20%7B%0A%20%20%20%20%20%20%20%20%20%20body%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

It puts this in the console:

```
{
  artists: allArtists {
    edges {
      node {
        id
        name
        slug
        picture {
          id
          handle
          width
          height
        }
        records {
          id
          slug
          title
        }
      }
    }
  }
  records: allRecords {
    edges {
      node {
        id
        slug
        title
        artist {
          id
          slug
          name
        }
        tracks {
          id
          title
          aliasedLength
        }
        cover {
          handle
        }
        reviews {
          id
          slug
          title
        }
      }
    }
  }
  reviews: allReviews {
    edges {
      node {
        id
        slug
        createdAt
        record {
          slug
          title
          artist {
            slug
            name
          }
        }
        title
        review
        rating
        comments {
          body
        }
      }
    }
  }
}
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/GraphCMS/gatsby-graphcms-example)

## Contributors

* [@redmega](https://github.com/redmega) Angel Piscola
* [@rafacm](https://github.com/rafacm) Rafael Cordones
* [@hmeissner](https://github.com/hmeissner) Hugo Meissner
* [@rdela](https://github.com/rdela) Ricky de Laveaga

…[and you](https://github.com/GraphCMS/gatsby-source-graphcms/issues)?

## [Current limitations](https://github.com/GraphCMS/gatsby-source-graphcms#current-limitations)

See https://github.com/GraphCMS/gatsby-source-graphcms for more.
