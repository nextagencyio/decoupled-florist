// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems { ... on ParagraphStatItem { id number label } }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            body { processed }
          }
          ... on NodeArrangement {
            __typename
            id
            title
            path
            body { processed summary }
            price
            flowerTypes
            arrangementSize
            availability
            bestFor
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url } }
          }
          ... on NodeOccasion {
            __typename
            id
            title
            path
            body { processed summary }
            summary
            startingPrice
            leadTime
            consultationIncluded
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url } }
          }
          ... on NodeTestimonial {
            __typename
            id
            title
            path
            body { processed summary }
            clientName
            clientLocation
            rating
            occasionType
            photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url } }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            heroTitle
            heroSubtitle
            heroDescription { processed }
            statsItems { ... on ParagraphStatItem { id number label } }
            featuredItemsTitle
            ctaTitle
            ctaDescription { processed }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

export const GET_ARRANGEMENTS = gql`
  query GetArrangements($first: Int = 10) {
    nodeArrangements(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeArrangement {
          body { processed summary }
          price
          flowerTypes
          arrangementSize
          availability
          bestFor
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url } }
        }
      }
    }
  }
`

export const GET_OCCASIONS = gql`
  query GetOccasions($first: Int = 10) {
    nodeOccasions(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeOccasion {
          body { processed summary }
          summary
          startingPrice
          leadTime
          consultationIncluded
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url } }
        }
      }
    }
  }
`

export const GET_TESTIMONIALS = gql`
  query GetTestimonials($first: Int = 10) {
    nodeTestimonials(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeTestimonial {
          body { processed summary }
          clientName
          clientLocation
          rating
          occasionType
          photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url } }
        }
      }
    }
  }
`
