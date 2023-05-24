const express = require("express");
const app = express();

app.use(express.json());

const sapinsData = require("./sapinsData.json");

app.get("/", (req, res) => {
  //   console.log(req.query.arrdt);
  const arrdtReq = req.query.arrdt;
  const findArrdt = sapinsData.find(
    (element) => element.fields.arrdt === arrdtReq
  );
  console.log(findArrdt);
  res.status(200).json(
    // sapinsData.map(({ fields }) => {
    //   //   console.log(fields);

    //   return {
    //     garden: fields.jardin,
    //     adress: fields.adresse,
    //     arrdt: fields.arrdt,
    //   };
    // })
    {
      //   garden: fields.jardin,
      //   adress: fields.adresse,
      //   arrdt: fields.arrdt,
    }
  );
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route doesn't exist !" });
});

app.listen(3000, () => {
  console.log("Server Started 🚀");
});
