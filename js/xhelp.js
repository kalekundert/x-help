var xhelp = xhelp || {}

xhelp.Tooltip = function(icon) {
  this.$icon = $(icon)
  this.$button = this.$icon.parent()
  this.$container = this.$button.parent()
  this.$message = this.$button.next()
  this.justOpened = true

  this.open = function() {
    this.$message.addClass('xhelp-message-active')
  }
  this.close = function() {
    this.$message.removeClass('xhelp-message-active')
  }
  this.is_target = function(event) {
    return $(event.target).closest('.xhelp-message').is(this.$message)
  }
}

xhelp.activeTooltip = null;

xhelp.onClickToOpen = function(event) {
  console.log('onClickToOpen')
  console.log(xhelp.activeTooltip)
  console.log(event.target)
  if(xhelp.activeTooltip === null) {
    xhelp.activeTooltip = new xhelp.Tooltip(event.target)
    xhelp.activeTooltip.open()
    console.log(xhelp.activeTooltip)
    console.log(xhelp.activeTooltip.$message)
  }
}

xhelp.onClickToClose = function(event) {
  console.log('onClickToClose')
  if(xhelp.activeTooltip === null) return;
  if(xhelp.activeTooltip.is_target(event)) return;

  if(xhelp.activeTooltip.justOpened) {
    xhelp.activeTooltip.justOpened = false;
    return
  }

  xhelp.activeTooltip.close()
  xhelp.activeTooltip = null
}

$(document).ready(function() {
  $('x-help').replaceWith(function() {
    return $(`
      <div class="xhelp-container">
        <button class="xhelp-button">
          <span class="fas fa-question-circle"></span>
        </button>
        <p class="xhelp-message">${this.innerHTML}</p>
      </div>
    `)
  });

  $('.xhelp-button').click(xhelp.onClickToOpen)
  $(document).click(xhelp.onClickToClose)

});


