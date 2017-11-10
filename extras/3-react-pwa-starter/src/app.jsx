import React from 'react'
import 'styles/index.scss'

const Mock = [
  {img: 'https://pbs.twimg.com/media/Bz6t7HlIgAEax8E.jpg:large', title: 'Dog1'},
  {img: 'https://i.imgur.com/FjHheAA.jpg', title: 'Dog2'},
  {img: 'https://i.ytimg.com/vi/Doxj7ACZSe4/hqdefault.jpg', title: 'Dog3'},
  {img: 'https://www.biography.com/.image/t_share/MTQ3NjM5ODIyNjU0MTIxMDM0/snoop_dogg_photo_by_estevan_oriol_archive_photos_getty_455616412.jpg', title: 'Snoop Dogg'}
]


export default class App extends React.Component {
  mountCards (item, index) {
    return(<img src={item.img} style={{width: '300px', padding: 10}} key={index} />)
  }

  render () {
    return (
      <div style={{display: 'flex', alignItems: 'baseline', flexWrap: 'wrap'}}>
        {Mock.map(this.mountCards)}
      </div>
    )
  }
}
