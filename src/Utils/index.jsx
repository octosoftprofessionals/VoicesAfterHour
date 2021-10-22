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

const yearsList = (podcasts) => {
  const yearsList = []

  podcasts.forEach(({ node }) => {
    let date = new Date(node.creationDate)
    const year = date.getFullYear()

    if (!yearsList.includes(year)) {
      yearsList.push(year)
    }
  })
  yearsList.sort()
  const sortYearsList = yearsList.reverse()
  return sortYearsList
}

const monthList = (year, anualPodcasts) => {
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
  const res = [year]
  anualPodcasts.forEach(({ node }) => {
    let indexMonth = new Date(node.creationDate).getMonth()
    setIndexMonth.add(indexMonth)
  })

  setIndexMonth.forEach((value) => {
    res.push({
      month: months[value],
      podcast: anualPodcasts
        .filter(({ node }) => {
          let indexMonth = new Date(node.creationDate).getMonth()
          if (indexMonth === value) {
            return true
          }
        })
        .reverse(),
    })
  })

  return res
}

const podcastsPerMonth = (podcastsPerYearList) => {
  const res = []
  podcastsPerYearList.forEach(({ year, anualPodcasts }) => {
    res.push(monthList(year, anualPodcasts))
  })
  return res
}

const podcastsPerYearList = (podcasts) => {
  const res = []

  yearsList(podcasts).forEach((year) => {
    let oneYearPodcasts = podcasts.filter(({ node }) => {
      let yearFull = new Date(node.creationDate).getFullYear()
      if (yearFull === year) {
        return true
      }
    })

    res.push({ year: year, anualPodcasts: oneYearPodcasts })
  })
  return res
}

export {
  finedImgUrl,
  submitForm,
  yearsList,
  podcastsPerYearList,
  monthList,
  podcastsPerMonth,
}
