const links = [
    {
      label: "Week1",
      url: "week1/index.html"
    },
    {
        label: "Week2",
        url: "week2/index.html"
    },
    {
        label: "Week3",
        url: "week3/index.html"
    }
  ]

  var output = '';
  for (var i = 0; i < links.length; i++){
      output += `<li> <a href=${links[i].url}> ${links[i].label}</a> </li>`;
  }

  document.getElementById('links').innerHTML = output;
