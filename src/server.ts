import app from "./app";
import { sequelize } from "./config/database";
import { InterestAccrual } from "./models/InterestAccrual";

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Database connected");

        await sequelize.sync({ alter: true });

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
}

startServer();
