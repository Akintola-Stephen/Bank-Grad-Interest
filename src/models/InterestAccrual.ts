import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export class InterestAccrual extends Model {
    declare id: number;
    declare principal: number;
    declare interest: number;
    declare date: Date;
}

InterestAccrual.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        principal: { type: DataTypes.INTEGER, allowNull: false },
        interest: { type: DataTypes.INTEGER, allowNull: false },
        date: { type: DataTypes.DATEONLY, allowNull: false },
    },
    { sequelize, tableName: "interest_accruals" }
);
