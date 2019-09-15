var xhelp = xhelp || {}

xhelp.Tooltip = function(icon) {
  this.$icon = $(icon)
  this.$button = this.$icon.parent()
  this.$container = this.$button.parent()
  this.$message = this.$button.next()

  this.open = function() {
    this.$message.addClass('xhelp-message-active')
  }
  this.close = function() {
    this.$message.removeClass('xhelp-message-active')
  }
  this.is_target = function(event) {
    return $(event.target).closest('.xhelp-container').is(this.$container)
  }
}

xhelp.activeTooltip = null;

xhelp.onClickToToggle = function(event) {
  if(xhelp.activeTooltip === null) {
    xhelp.activeTooltip = new xhelp.Tooltip(event.target)
    xhelp.activeTooltip.open()
  }
  else {
    xhelp.activeTooltip.close()
    xhelp.activeTooltip = null
  }
}

xhelp.onClickToClose = function(event) {
  if(xhelp.activeTooltip === null) return;
  if(xhelp.activeTooltip.is_target(event)) return;

  xhelp.activeTooltip.close()
  xhelp.activeTooltip = null
}

$(document).ready(function() {

  $('x-help').replaceWith(function() {
    return $(`
      <div class="xhelp-container">
        <button type="button" class="xhelp-button">
          <span class="fas fa-question-circle"></span>
        </button>
        <div class="xhelp-message">${this.innerHTML}</div>
      </div>
    `)
  });

  $('.xhelp-button').click(xhelp.onClickToToggle)
  $(document).mousedown(xhelp.onClickToClose)

});


