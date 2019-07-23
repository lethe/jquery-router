import "../scss/main.scss"
import "jquery-slim"

import homepage from "./pages/homepage"
import router from "./router"

const site = {
  ready: false,
  preset: () => {},

  init: () => {
    homepage.init()
    router.init()
  },

  load: () => {},

  resize: () => {},

  scroll: () => {}
}

$(document).ready( () => {
  site.init()
})