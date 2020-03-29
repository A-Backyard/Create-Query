$(document).ready(function() {
  $.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function() {
      var $this = $(this);
      $this.html(string.replace(/./g, '<span class="new">$&</span>'));
      $this.find('span.new').each(function(i, el) {
        setTimeout(function() {
          $(el).addClass('div_opacity');
        }, 40 * i);
      });
    });
  };
  $('#ln1').show();
  $('#ln1').animate_Text();
});

$(document).ready(function() {
  $.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function() {
      var $this = $(this);
      $this.html(string.replace(/./g, '<span class="new">$&</span>'));
      $this.find('span.new').each(function(i, el) {
        setTimeout(function() {
          $(el).addClass('div_opacity');
        }, 40 * i);
      });
    });
  };
  $('#ln2').show();
  $('#ln2').animate_Text();
});