export = User;
declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    createdAt: NativeDate;
    updatedAt: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    createdAt: NativeDate;
    updatedAt: NativeDate;
}, {}, {
    timestamps: {
        createdAt: true;
        updatedAt: true;
    };
}> & {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: {
        createdAt: true;
        updatedAt: true;
    };
}, {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    createdAt: NativeDate;
    updatedAt: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    createdAt: NativeDate;
    updatedAt: NativeDate;
}>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: {
        createdAt: true;
        updatedAt: true;
    };
}>> & mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    createdAt: NativeDate;
    updatedAt: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
import mongoose = require("mongoose");
//# sourceMappingURL=User.d.ts.map