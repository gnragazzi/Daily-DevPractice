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
  constructor(name, date) {
    this.id = data.length + 1
    this.date = date
    this.name = name
    this.link = `./Proyectos/${
      this.id < 10 ? `0${this.id}` : this.id
    }. ${name}/index.html`
  }
}

data.unshift(new ProjectData('Pseudo-Coop', '18 February 2021'))
data.unshift(new ProjectData('Random Quote Machine', '19 February 2021'))
data.unshift(new ProjectData('Icon Bar', '20 February 2021'))
data.unshift(new ProjectData('Menu Icon', '22 February 2021'))
data.unshift(new ProjectData('Accordion', '23 February 2021'))
data.unshift(new ProjectData('Tabs', '24 February 2021'))
data.unshift(new ProjectData('Tab Header', '25 February 2021'))
data.unshift(new ProjectData('Navbar w icons', '26 February 2021'))
data.unshift(new ProjectData('Search Menu', '27 February 2021'))
data.unshift(new ProjectData('Fixed-sidebar', '1 March 2021'))
data.unshift(new ProjectData('Sidebar', '2 March 2021'))
data.unshift(new ProjectData('Responsive Sidebar', '3 March 2021'))
data.unshift(new ProjectData('Full Screen Overlay', '4 March 2021'))
data.unshift(new ProjectData('Side Navigation Buttons', '5 March 2021'))
data.unshift(new ProjectData('Sticky Navbar', '6 March 2021'))
data.unshift(new ProjectData('Navbar on Image', '8 March 2021'))
data.unshift(new ProjectData('Hoverable Dropdown', '9 March 2021'))
data.unshift(new ProjectData('Click Dropdown', '10 March 2021'))
data.unshift(new ProjectData('Cascading Dropdown', '11 March 2021'))
data.unshift(new ProjectData('Dropdown Navbar', '12 March 2021'))
data.unshift(new ProjectData('Sidebar Dropdown', '13 March 2021'))
data.unshift(new ProjectData('Submenu', '15 March 2021'))
data.unshift(new ProjectData('Mobile Nav', '16 March 2021'))
data.unshift(new ProjectData('Slideshow', '17 March 2021'))
data.unshift(new ProjectData('Sideshow Gallery', '18 March 2021'))
data.unshift(new ProjectData('Modal Image', '19 March 2021'))
data.unshift(new ProjectData('Modal Image Gallery', '20 March 2021'))
data.unshift(new ProjectData('Image Grid', '22 March 2021'))
data.unshift(new ProjectData('Image grid w buttons', '23 March 2021'))
