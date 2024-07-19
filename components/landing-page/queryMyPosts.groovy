query Publication($host: String) {
  publication(host: $host) {
    isTeam
    title
    posts(first: 10) {
      edges {
        node {
          title
          brief
          url
        }
      }
    }
  }
}