const finedImgUrl = (edges, searched) => {
  const { node } = edges.find(
    ({ node }) => node.title.toLowerCase() === searched.toLowerCase()
  )

  return node.file.url
}

const submitForm = (formName, params) => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  return fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encode({
      'form-name': formName,
      ...params,
    }),
  })
}

const monthList = (podcasts, year) => {
  const annualPodcasts = podcasts.filter(({ node }) => {
    let yearFull = new Date(node.creationDate).getFullYear()
    return yearFull === year
  })
  const setIndexMonth = new Set()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const res = []
  annualPodcasts.forEach(({ node }) => {
    let indexMonth = new Date(node.creationDate).getMonth()
    setIndexMonth.add(indexMonth)
  })

  setIndexMonth.forEach((value) => {
    res.push({
      month: months[value],
      podcasts: annualPodcasts
        .filter(({ node }) => {
          let indexMonth = new Date(node.creationDate).getMonth()
          return indexMonth === value
        })
        .reverse(),
    })
  })

  return res
}

const podcastsPerYearList = (podcasts) => {
  const res = []
  const yearsList = new Set()

  podcasts.forEach(({ node }) => {
    let date = new Date(node.creationDate)
    const year = date.getFullYear()
    yearsList.add(year)
  })

  yearsList.forEach((value) => {
    res.push({
      years: value,
      annualPodcasts: monthList(podcasts, value),
    })
  })
  return res
}

export { finedImgUrl, submitForm, podcastsPerYearList, monthList }
