import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../database/database";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare userId: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string;
  declare permissionLevel: "staff" | "non-staff";
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    permissionLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "User",
    timestamps: false,
    sequelize: sequelize,
  }
);
