console.log("This is project3 file");
// let source = "the-times-of-india";
// let apiKey = "f9a56250b7fd490b8223d72b500d0e6b";
let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=f9a56250b7fd490b8223d72b500d0e6b`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index)
      let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1} :</b> ${
        element["title"]
      }
                                </button>
                                </h2>
                            </div>

                            <d iv id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${
                                  element["content"]
                                }. <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
