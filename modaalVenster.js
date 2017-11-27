var modaalVenObj = (function(){
    
    var $window = $(window);
    var $modaal_GegevensV = $('<div class="modaal-gegevensV modaal-style"/>');
    var $modaal_Gegevens = $('<div class="modaal-gegevens"/>');
    var $Dichtmaker = $('<span class="dicht-maker">&#10005;</span>');
    
    $modaal_GegevensV.append($modaal_Gegevens);
    
    return {
        centreren: function(){
            // Opdrachten centreren
            var links = Math.max($window.width()-$modaal_Gegevens.outerWidth(), 0) / 2;
            var boven = Math.max($window.height()-$modaal_Gegevens.outerHeight(), 0) / 2;
            $modaal_Gegevens.css({left: links, top: boven});
        },
        openen: function(instellingen){
            // Opdrachten openen
            $modaal_Gegevens.append(instellingen.inhoud, $Dichtmaker);
            $modaal_Gegevens.css({width: instellingen.breedte+'px' || 'auto', 
                              height: instellingen.hoogte+'px' || 'auto'})
                .on('click', function(e){
                    e.stopPropagation();
            });
            $modaal_GegevensV.appendTo('body')
                .on('click', modaalVenObj.sluiten);
            modaalVenObj.centreren();
            $Dichtmaker.on('click', modaalVenObj.sluiten);
            $window.on('resize', modaalVenObj.centreren);
        },
        sluiten: function(){
            // Opdrachten sluiten
            $modaal_Gegevens.empty()
                .off('click', modaalVenObj.sluiten);
            $modaal_GegevensV.detach();
            $window.off('resize', modaalVenObj.centreren);
        }
    }
}());