import React, { useEffect, useState } from 'react'

const data =
  [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

  ]


function HomePage() {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [])

  const sortByDate = () => {
    const temp = [...data];
    temp.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (dateA !== dateB) {
        return dateB - dateA; // Sort by date in descending order
      } else {
        return b.views - a.views; // Sort by views if dates are equal
      }
    })
    setTableData(temp);
  }

  const sortByViews = () => {
    const temp = [...data];
    temp.sort((a, b) => {
      if (a.views !== b.views) {
        return b.views - a.views;
      } else {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA
      }
    })
    setTableData(temp);
  }

  return <div>
    <h1>Date and Views Table</h1>
    <button onClick={sortByDate}>Sort by Date</button>
    <button onClick={sortByViews}>Sort by Views</button>
    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>Views</td>
          <td>Article</td>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => {
          return <tr key={index}>
            <td>{row.date}</td>
            <td>{row.views}</td>
            <td>{row.article}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

export default HomePage