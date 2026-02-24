import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from '@sequelize/core';
import { Attribute, Table } from '@sequelize/core/decorators-legacy';
import { UserStatus } from '../../domain';

@Table({ tableName: 'user' })
export class UserModel extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
> {
    @Attribute({
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare id: CreationOptional<number>; //You wont need to declare this value

    @Attribute({
        type: DataTypes.STRING(100),
        allowNull: false,
    })
    declare firstName: string;

    @Attribute({
        type: DataTypes.STRING(100),
        allowNull: true,
    })
    declare lastName?: string;

    //CHANGE THIS TO DATE_OF_BIRTH
    @Attribute({
        type: DataTypes.INTEGER,
        allowNull: true,
    })
    declare age?: number;

    @Attribute({
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    })
    declare email: string;

    @Attribute({
        type: DataTypes.ENUM(Object.values(UserStatus)),
        unique: false,
        allowNull: false,
        defaultValue: UserStatus.Created,
    })
    declare status?: UserStatus;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}
