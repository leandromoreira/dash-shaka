import HTML5Video from 'clappr'
import shaka from 'shaka-player'

export default class DashShaka extends HTML5Video {
  constructor(options) {
    super(options)
    this.setup()
  }

  setup() {
    shaka.polyfill.installAll()

    this.player = new shaka.player.Player(this.el)
    this.player.load(new shaka.player.DashVideoSource(this.options.src))
  }
}

DashShaka.canPlay = function(resource, mimeType) {
  var resourceParts = resource.split('?')[0].match(/.*\.(.*)$/) || []
  return "mpd" === resourceParts[1]
}
