const router = {
  routes : [],
  root : '/',
  current : null,
  view : $('#view'),

  init: function() {
    this.current = window.location.pathname
    this.set()
    this.navigate()
    console.log(this.current)
    this.routes.forEach((element) => {
      if (element.path == this.current) this.render(element.template)
    })
  },

  render: function(template) {
    this.view.text(template)
  },

  route: function(path, template, controller) {
    this.routes.push({
      path: path,
      template: template,
      controller: controller
    })
  },

  set: function() {
    router.route('/', 'home', 'homepage')
    router.route('/about', 'about', 'aboutpage')
  },

  navigate: function() {
    $('[router-link]').on('click', (e) => {
      e.preventDefault()
      const target = e.currentTarget.attributes['router-link'].nodeValue
      window.history.pushState(null, null, this.root + target)
      this.init()
    })
  }
}

export default router