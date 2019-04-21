var rulesDoc = new Blob([`
<head>
  <title>How To Play</title>
  <style>

    div{
      margin: auto;
      max-width: 700px;
    }
  </style>
</head>
<body>
  <div>

  <p>The Rorschach test is a psychological test in which subjects' perceptions of inkblots are recorded and then analyzed using psychological interpretation, complex algorithms, or both. Some psychologists use this test to examine a person's personality characteristics and emotional functioning. It has been employed to detect underlying thought disorder, especially in cases where patients are reluctant to describe their thinking processes openly.[4] The test is named after its creator, Swiss psychologist Hermann Rorschach. In the 1960s, the Rorschach was the most widely used projective test.[5]</p>

</div>
</body
`], {type: "text/html"});
var rulesURL = URL.createObjectURL(rulesDoc);

var htp = document.getElementById("htp");
htp.addEventListener("click", function() {
  window.open(rulesURL);
});
