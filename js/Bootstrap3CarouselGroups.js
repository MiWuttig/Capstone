var currentArticleCount = 1;

/* Grouping the Article-Divs */
function GroupCarouselArticles(ArticleCount) {
    /* Check if grouping has to be changed */
    if ((currentArticleCount != ArticleCount) && (ArticleCount > 0)) { 
        /* First take each carousel in document */
        var CarouselInnerDivs = document.getElementsByClassName("carousel-inner");
        var CarouselInnerDivCount = CarouselInnerDivs.length;

        for (let i = 0; i < CarouselInnerDivCount; i++){
            /* Second re-arrange all Article-Divs in each carousel */
            /* var ArticleDivs = CarouselInnerDivs[i].getElementsByClassName("ArticleDiv"); */
            var ArticleDivs = CarouselInnerDivs[i].getElementsByTagName("article");
            var ArticleDivCount = ArticleDivs.length;
            var AddedGroupDivs = 1;
            var j = 0;

            /* Mark old Group-Divs */
            var OldGroupDivs = CarouselInnerDivs[i].getElementsByClassName("CarouselGroupDiv");
            for (d = 0; d < OldGroupDivs.length; d++){
                OldGroupDivs[d].classList.add("OLD");
            };

            while (j < ArticleDivCount) {
                /* Create a new Grouping Div with necessary classes */
                var newGroupDiv = document.createElement("div");
                newGroupDiv.classList.add("CarouselGroupDiv");
                newGroupDiv.classList.add("GroupSize"+ArticleCount)
                newGroupDiv.classList.add("item");
                if (j == 0) {newGroupDiv.classList.add("active")}
                newGroupDiv.id = "CarouselGroup" + AddedGroupDivs;

                /* Add the requested amount of Articles to ne Group-Div */
                for (k = 0; (k < ArticleCount) && (j < ArticleDivCount); k++) {
                   /* Create a new Copy-Sub-Divs */
                    var newArticle = document.createElement("article");
                    newArticle.id = ArticleDivs[0].id;
                    newArticle.classList = ArticleDivs[0].classList;
                    newArticle.innerHTML += ArticleDivs[0].innerHTML;

                    /* Add Copy-Sub-Div to new Group Div */
                    newGroupDiv.append(newArticle);

                    /* Remove old Article */
                    ArticleDivs[0].parentNode.removeChild(ArticleDivs[0]);

                    j++;
                };

                /* Add GroupDiv to inner-carousel */
                CarouselInnerDivs[i].append(newGroupDiv);
                /* Increase Counter */
                AddedGroupDivs++;
            };

            /* Remove old Group-Divs */
            var OldGroupDivs = CarouselInnerDivs[i].getElementsByClassName("OLD");
            var OldGroupDivCount = OldGroupDivs.length
            for (d = 0; d < OldGroupDivCount; d++){
                OldGroupDivs[0].parentNode.removeChild(OldGroupDivs[0]);
            };
        };

        /* refresh Article Counter per Carousel Div */
        currentArticleCount = ArticleCount;
    };
}

/* Support from https://www.sitepoint.com/javascript-media-queries/ and LGSON at https://stackoverflow.com/questions/49989723/how-can-i-force-a-matching-window-matchmedia-to-execute-on-page-load */
document.addEventListener("DOMContentLoaded", function(e){
    var mqls = [
        window.matchMedia("(max-width: 767px)"),
        window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
        window.matchMedia("(min-width: 922px) and (max-width: 1199px)"),
        window.matchMedia("(min-width: 1200px)")
    ]

    WidthChange();

    for (i = 0; i < mqls.length; i++){mqls[i].addListener(WidthChange);};

    function WidthChange(){
        if (mqls[0].matches) {GroupCarouselArticles(1);
        } else if (mqls[1].matches) {GroupCarouselArticles(2);
        } else if (mqls[2].matches) {GroupCarouselArticles(2);
        } else if (mqls[3].matches) {GroupCarouselArticles(2);}
    };
})