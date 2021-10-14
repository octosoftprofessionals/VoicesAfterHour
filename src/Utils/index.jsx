const finedImgUrl = (edges, searched) => {
  const { node } = edges.find(
    ({ node }) => node.title.toLowerCase() === searched.toLowerCase()
  )

  return node.file.url
}

export { finedImgUrl }
