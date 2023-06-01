import express from "express";

const app = express();
const router = express.Router();

app.use(express.json());

app.use("/general", router.get("/test", (req, res) => {
    res.status(200).json({ message: "conectado" })
}));

const PORT = 3000;

try {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}
    \n
    ${PRINT_THIS}
    `));

} catch {((error) => console.log("error starting app"));}