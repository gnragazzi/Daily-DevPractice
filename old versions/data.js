const months = [
  'January',
  'Febraury',
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

export const data = []

class ProjectData {
  constructor(name) {
    this.id =
      data.length + 1 - data.filter((item) => item.name === 'sunday').length
    this.initialDate = new Date(
      2021,
      1,
      17 + this.id + data.filter((item) => item.name === 'sunday').length
    )

    this.date = `${this.initialDate.getDate()} ${
      months[this.initialDate.getMonth()]
    } ${this.initialDate.getFullYear()}`
    this.name = name
    this.link = `./Proyectos/${
      this.id < 10 ? `0${this.id}` : this.id
    }. ${name}/index.html`
  }
}

data.unshift(new ProjectData('Pseudo-Coop'))
data.unshift(new ProjectData('Random Quote Machine'))
data.unshift(new ProjectData('Icon Bar'))
data.unshift(new ProjectData('sunday'))
data.unshift(new ProjectData('Menu Icon'))
data.unshift(new ProjectData('Accordion'))
data.unshift(new ProjectData('Tabs'))
data.unshift(new ProjectData('Tab Header'))
data.unshift(new ProjectData('Navbar w icons'))
data.unshift(new ProjectData('Search Menu'))
data.unshift(new ProjectData('sunday'))
data.unshift(new ProjectData('Fixed-sidebar'))
data.unshift(new ProjectData('Sidebar'))
data.unshift(new ProjectData('Responsive Sidebar'))
data.unshift(new ProjectData('Full Screen Overlay'))
