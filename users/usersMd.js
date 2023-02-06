const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    fullName: {type: String, required: true},
    userName: {type: String, required:true, unique:true},
    email: {type: String, required:true, unique:true},
    profilePic: {type: String, default:""},
    password: {type: String, required:true},
    

},
{
    timestamps: true,
}
);
Schema.set("toJSON", {
    transform(doc, ret) {
        ret.id = ret.__id;
       delete ret.__id;
      /*  delete ret.password; */
 }
});

const User = mongoose.model("User", Schema);
module.exports = User